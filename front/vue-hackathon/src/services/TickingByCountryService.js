import Service from './Service'
import TickingModel from '../models/TickingModel';

export default {
    searchParams: {
        "index": "billeterie",
        "type": "entreemusee",
        "body": {
            "size": 0,
            "aggs": {
                "group-musee": {
                    "terms": {
                        "field": "musee.keyword",
                        "size": 5,
                        "order": {
                            "_count": "desc"
                        }
                    },
                    "aggs" : {
                        "group-pays" : {
                            "terms": {
                                "field": "pays.keyword",
                                "size": 50,
                                "order": {
                                    "_count": "desc"
                                }
                            }
                        }
                    }
                },
            }
        }
    },
    get() {
        return Service.get(this.searchParams)
            .then(function (resp) {
                var ticking = TickingModel.convert(resp);
                Service.addData(ticking);
            })
            .catch(function (err) {
                console.trace(err.message);
            });
    }
}