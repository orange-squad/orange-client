# Orange Client

## Links
### [NPI Registry API Docs](https://npiregistry.cms.hhs.gov/registry/help-api)
- [NPI Registry API Demo](https://npiregistry.cms.hhs.gov/api/demo?version=2.1)

```json
{
  "data": {
    "addresses": [
      {
        "address_1": "1090 AMSTERDAM AVENUE SUITE 16A",
        "address_2": "MOUNT SINAI ST. LUKE'S",
        "address_purpose": "LOCATION",
        "address_type": "DOM",
        "city": "NEW YORK CITY",
        "country_code": "US",
        "country_name": "United States",
        "fax_number": "212-523-1685",
        "postal_code": "10025",
        "state": "NY",
        "telephone_number": "212-523-5089"
      },
      {
        "address_1": "1090 AMSTERDAM AVENUE SUITE 16A",
        "address_2": "MOUNT SINAI ST. LUKE'S",
        "address_purpose": "MAILING",
        "address_type": "DOM",
        "city": "NEW YORK CITY",
        "country_code": "US",
        "country_name": "United States",
        "postal_code": "10025",
        "state": "NY"
      }
    ],
    "basic": {
      "certification_date": "2021-02-04",
      "enumeration_date": "2015-04-23",
      "first_name": "MARK",
      "gender": "M",
      "last_name": "ABROMS",
      "last_updated": "2021-02-04",
      "name": "ABROMS MARK",
      "sole_proprietor": "NO",
      "status": "A"
    },
    "created_epoch": 1429747200,
    "endpoints": [
      {
        "address_1": "1 PARK AVE",
        "address_2": "",
        "address_type": "DOM",
        "affiliation": "N",
        "affiliationName": "",
        "city": "NEW YORK",
        "contentOtherDescription": "",
        "contentType": "",
        "contentTypeDescription": "",
        "country_code": "US",
        "country_name": "United States",
        "endpoint": "mabroms361806@nyumc.direct-ci.com",
        "endpointDescription": "",
        "endpointType": "DIRECT",
        "endpointTypeDescription": "Direct Messaging Address",
        "postal_code": "100165802",
        "state": "NY",
        "use": "",
        "useDescription": "",
        "useOtherDescription": ""
      }
    ],
    "enumeration_type": "NPI-1",
    "identifiers": "[]",
    "last_updated_epoch": 1612433489,
    "number": 1265829667,
    "other_names": "[]",
    "taxonomies": [
      {
        "code": "2084P0800X",
        "desc": "Psychiatry & Neurology Psychiatry",
        "license": "288911",
        "primary": true,
        "state": "NY"
      }
    ],
    "place_id": "ChIJUyrmBQ9ZwokRoJUKJLJHlKc",
    "rating": 4,
    "user_ratings_total": 13
  }
}
```

### [Google Maps Place Search](https://developers.google.com/maps/documentation/places/web-service/search?hl=en_US#PlaceSearchResults)

#### Place Search Request
```http
GET https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=[API_KEY]&inputtype=textquery&fields=place_id,rating,user_ratings_total&input=[QUERY]
```
#### Place Search Response
```json
{
  "candidates": [
    {
      "place_id": "ChIJtY_9lWFYwokRFRUrwJpWr6c",
      "rating": 5,
      "user_ratings_total": 2
    }
  ],
  "status": "OK"
}
```

#### Place Details Request
```http
GET https://maps.googleapis.com/maps/api/place/details/json?key=[API_KEY]&place_id=[PLACE_ID]&fields=rating,review,user_ratings_total,website
```

#### Place Details Response
```json
{
  "html_attributions": [],
  "result": {
    "rating": 5,
    "reviews": [
      {
        "author_name": "Amitai Blickstein",
        "author_url": "https://www.google.com/maps/contrib/108482436761351173356/reviews",
        "language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14Gh7_lRLZJa0bEEMFDdCPuVBpoHaLC9c8tHaubgwAIU=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "relative_time_description": "4 years ago",
        "text": "I only had my first session, so I'll try to update this accordingly. I found Dr. Malkin to be sharp, quick on the uptake, and sympathetic. Highly recommended.",
        "time": 1494339714
      },
      {
        "author_name": "Chris",
        "author_url": "https://www.google.com/maps/contrib/102953861035383010030/reviews",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJwODqQIrUDswCFBY_TbiZiq9K-Ta2DEsplnhT8hxw=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "relative_time_description": "3 years ago",
        "text": "",
        "time": 1503364338
      }
    ],
    "user_ratings_total": 2,
    "website": "https://www.zocdoc.com/doctor/dmitry-malkin-md-41294"
  },
  "status": "OK"
}
```

## Quick Reference
- [React-Bootstrap Cards](https://react-bootstrap.github.io/components/cards/)


## File Structure
📁 /src
- 📁 /assets
- 📁 /components
  - 📰 ProviderCard
- 📁 /pages
  - 📰 Home
  - 📰 Search
  - 📰 Details
