export interface searchResponse {
    matching_alternate_names: [{ name: string }],
    matching_full_name: string,
    _links: {"city:item":{
        href:string
    }}

}

export interface cityData {
    categories: [{
        color: string,
        name: string,
        score_out_of_10: number
    }],
    summary: string,
    teleport_city_score: number,
    _links: {
        curies: [{
            href: string,
            name: string,
            templated: boolean
        }],
        "city:urban_area":{
            href:string
        }
        self:{
            href:string
       
    }
}


}

export interface cityReponse{
count:number
_embedded: {"city:search-results":[]},

_links:{
    curies:[],
    self:{
        href:string
    }
}
}
