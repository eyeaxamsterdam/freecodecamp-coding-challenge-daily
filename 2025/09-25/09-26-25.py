def speeding_statistics(speeds, speed_limit):
    # Initialize variables to count speeding vehicles and total over-speed amount
    speeding_count = 0
    total_over_speed = 0
    
    # Iterate over each observed speed
    for speed in speeds:
        # Check if the vehicle was speeding
        if speed > speed_limit:
            speeding_count += 1
            total_over_speed += (speed - speed_limit)
    
    # Calculate the average over-speed, if any vehicles were speeding
    if speeding_count > 0:
        average_over_speed = total_over_speed / speeding_count
    else:
        average_over_speed = 0
        
    # Return the number of speeding vehicles and the average over-speed amount
    return [speeding_count, average_over_speed]

# Example usage
print(speeding_statistics([58, 50, 60, 55], 55))