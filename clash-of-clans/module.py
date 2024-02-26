import urllib.request
import json

with open("my_key_coc.txt") as file:
    my_key = file.read().rstrip("\n")
    base_url = "https://api.clashofclans.com/v1"
    endpoint = "/leagues"

    request = urllib.request.Request(
                    base_url + endpoint,
                    None,
                    {
                            "Authorization": "Bearer %s" % my_key
                    }
            )
    
    response = urllib.request.urlopen(request).read().decode("utf-8")

    data = json.loads(response)
    data_json = json.dumps(data)

with open("coc_league_data.json", "w") as json_file:
    json.dump(data, json_file, indent=4)