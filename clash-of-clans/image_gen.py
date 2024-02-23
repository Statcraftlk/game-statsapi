import json
import urllib.request
import os

with open('coc_league_data.json') as f:
    data = json.load(f)

os.makedirs('coc_league_images', exist_ok=True)

for item in data['items']:
    name = item['name']
    icon_url = item['iconUrls'].get('medium')
    if icon_url:
        try:
            urllib.request.urlretrieve(icon_url, f'coc_league_images/{name}.png')
            print(f'Saved coc_league_images/{name}.png')
        except Exception as e:
            print(f'Failed to download {name} image: {e}')

