import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import random

def generate_social_media_data(num_posts=100):
    # Post types with weighted probabilities
    post_types = ['static', 'carousel', 'reel']
    post_type_weights = [0.4, 0.35, 0.25]  # 40% static, 35% carousel, 25% reels
    
    # Time range for posts (last 6 months)
    end_date = datetime.now()
    start_date = end_date - timedelta(days=180)
    dates = [start_date + timedelta(days=x) for x in range(180)]
    
    # Base engagement rates for different post types
    engagement_rates = {
        'static': {'likes': 100, 'comments': 10, 'shares': 5, 'saves': 15},
        'carousel': {'likes': 150, 'comments': 15, 'shares': 8, 'saves': 25},
        'reel': {'likes': 200, 'comments': 20, 'shares': 12, 'saves': 30}
    }
    
    data = []
    for _ in range(num_posts):
        post_type = np.random.choice(post_types, p=post_type_weights)
        base_rates = engagement_rates[post_type]
        
        # Add random variation to engagement metrics
        engagement = {
            'postid': f"post{_}",
            'posttype': post_type,
            'postedat': random.choice(dates),
            'likes': int(np.random.normal(base_rates['likes'], base_rates['likes']*0.2)),
            'comments': int(np.random.normal(base_rates['comments'], base_rates['comments']*0.2)),
            'shares': int(np.random.normal(base_rates['shares'], base_rates['shares']*0.2)),
            'saves': int(np.random.normal(base_rates['saves'], base_rates['saves']*0.2)),
            'captionlength': random.randint(50, 300),
            'hashtagscount': random.randint(3, 15),
            'posthour': random.randint(0, 23)
        }
        
        # Ensure no negative values
        for metric in ['likes', 'comments', 'shares', 'saves']:
            engagement[metric] = max(0, engagement[metric])
            
        # Add time-based patterns
        if 9 <= engagement['posthour'] <= 20:  # Posts during active hours
            for metric in ['likes', 'comments', 'shares', 'saves']:
                engagement[metric] = int(engagement[metric] * random.uniform(1.1, 1.3))
        
        data.append(engagement)
    
    df = pd.DataFrame(data)
    
    # Calculate additional metrics
    df['totalengagement'] = df['likes'] + df['comments'] + df['shares'] + df['saves']
    df['engagementrate'] = (df['totalengagement'] / df['likes']) * 100
    
    # Sort by posting date
    df['postedat'] = pd.to_datetime(df['postedat'])
    df = df.sort_values('postedat')
    
    return df

# Generate dataset
df = generate_social_media_data(1000)

# Save to CSV
df.to_csv('social_media_data.csv', index=False)

# Display sample statistics
print("\nDataset Statistics:")
print(df.groupby('posttype').agg({
    'likes': 'mean',
    'comments': 'mean',
    'shares': 'mean',
    'engagementrate': 'mean'
}).round(2))
