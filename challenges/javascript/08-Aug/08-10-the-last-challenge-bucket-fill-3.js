/*
The Last Challenge: Bucket Fill 3
Today marks a year of daily coding challenges. This is the last new one for now. Good luck!

Given a 2D grid of single-letter color strings and a target color, return the minimum number of flood fill "clicks" needed to make the entire grid that color.

Each click changes the clicked cell's color and the entire region of connected cells of the same color (4-directional).
Clicks can use any color as an intermediate step, not just the target color.

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/08-10
*/

function bucketFill(grid, targetColor) {
    const visited = new Set();
    const regions = [];
    const regionMap = new Map(); // maps cell position to region index
    
    // Step 1: Identify all connected regions and assign them indices
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const key = `${i},${j}`;
            if (visited.has(key)) continue;
            
            const color = grid[i][j];
            const region = { color, cells: [] };
            const stack = [[i, j]];
            visited.add(key);
            
            while (stack.length > 0) {
                const [r, c] = stack.pop();
                const cellKey = `${r},${c}`;
                region.cells.push([r, c]);
                regionMap.set(cellKey, regions.length);
                
                const neighbors = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]];
                for (const [nr, nc] of neighbors) {
                    const nKey = `${nr},${nc}`;
                    if (
                        nr >= 0 && nr < grid.length &&
                        nc >= 0 && nc < grid[nr].length &&
                        !visited.has(nKey) &&
                        grid[nr][nc] === color
                    ) {
                        visited.add(nKey);
                        stack.push([nr, nc]);
                    }
                }
            }
            
            regions.push(region);
        }
    }
    
    // Step 2: Build adjacency graph between regions
    const adj = Array.from({ length: regions.length }, () => new Set());
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const r1 = regionMap.get(`${i},${j}`);
            const neighbors = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]];
            
            for (const [ni, nj] of neighbors) {
                if (ni >= 0 && ni < grid.length && nj >= 0 && nj < grid[ni].length) {
                    const r2 = regionMap.get(`${ni},${nj}`);
                    if (r1 !== r2) {
                        adj[r1].add(r2);
                    }
                }
            }
        }
    }
    
    // Step 3: precompute each region's neighbors as a bitmask for fast lookups
    const n = regions.length;
    const adjMask = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (const neighbor of adj[i]) {
            adjMask[i] |= (1 << neighbor);
        }
    }
    const fullMask = (1 << n) - 1;

    // Step 4: from a given starting region, simulate the merge process.
    // One "click" absorbs every currently-adjacent region that shares the
    // chosen color, all at once (that's what lets multiple regions merge
    // in a single click, as long as they're already the same color).
    // Explore level-by-level (BFS over the set of absorbed regions) so we
    // find both the minimum number of merge-clicks AND whether any
    // shortest path finishes with the target color already applied.
    function minClicksFrom(start) {
        const startMask = 1 << start;
        const dist = new Map([[startMask, 0]]);
        const finishesOnTarget = new Map([[startMask, regions[start].color === targetColor]]);

        let level = [startMask];

        while (level.length > 0 && !dist.has(fullMask)) {
            const next = new Map(); // newMask -> reached via target color at this level?

            for (const mask of level) {
                const colorGroups = new Map(); // color -> bitmask of frontier regions of that color
                for (let r = 0; r < n; r++) {
                    if (mask & (1 << r)) continue;
                    if ((adjMask[r] & mask) === 0) continue;
                    const color = regions[r].color;
                    colorGroups.set(color, (colorGroups.get(color) || 0) | (1 << r));
                }

                for (const [color, groupBits] of colorGroups) {
                    const newMask = mask | groupBits;
                    if (dist.has(newMask)) continue;
                    const isTarget = color === targetColor;
                    next.set(newMask, (next.get(newMask) || false) || isTarget);
                }
            }

            const newDist = dist.get(level[0]) + 1;
            level = [];
            for (const [newMask, isTarget] of next) {
                dist.set(newMask, newDist);
                finishesOnTarget.set(newMask, isTarget);
                level.push(newMask);
            }
        }

        // A fully-merged blob whose last click wasn't the target color
        // still needs one more click to actually paint it the target color.
        return dist.get(fullMask) + (finishesOnTarget.get(fullMask) ? 0 : 1);
    }

    let best = Infinity;
    for (let s = 0; s < n; s++) {
        best = Math.min(best, minClicksFrom(s));
    }
    return best;
}

const runTests = require('../../../helpers/runTests');
runTests(bucketFill, [
    `assert.equal(bucketFill([["B", "B"], ["B", "B"]], "R"), 1);`,
    `assert.equal(bucketFill([["G", "G", "G"], ["G", "G", "G"], ["G", "G", "G"]], "G"), 0);`,
    `assert.equal(bucketFill([["P", "P", "Y"], ["Y", "P", "Y"], ["Y", "P", "P"]], "O"), 2);`,
    `assert.equal(bucketFill([["G", "Y", "C", "C"], ["Y", "Y", "Y", "B"], ["C", "Y", "B", "B"], ["C", "B", "B", "C"]], "R"), 4);`,
    `assert.equal(bucketFill([["G", "G", "O", "O"], ["G", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["G", "G", "G", "G"]], "P"), 5);`,
    `assert.equal(bucketFill([["R", "G", "R", "G"], ["R", "G", "R", "G"], ["B", "B", "B", "B"], ["B", "B", "B", "B"], ["R", "G", "R", "G"]], "Y"), 3);`,
]);
