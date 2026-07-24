import sys

TEST_SEPARATOR = "# ---"


def run_tests(fn, raw_tests):
    blocks = [b.strip() for b in raw_tests.split(TEST_SEPARATOR) if b.strip()]

    pass_count = 0
    fail_count = 0

    for block in blocks:
        lines = [l for l in block.splitlines() if l.strip()]
        label = lines[-1] if lines else block

        namespace = {fn.__name__: fn}
        try:
            exec(block, namespace)
            print(f"PASS: {label}")
            pass_count += 1
        except AssertionError as e:
            print(f"FAIL: {label}")
            print(f"  {e}")
            fail_count += 1
        except Exception as e:
            print(f"FAIL: {label}")
            print(f"  {type(e).__name__}: {e}")
            fail_count += 1

    print(f"\n{pass_count} passed, {fail_count} failed")
    if fail_count > 0:
        sys.exit(1)
