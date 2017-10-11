import Service from './Service';
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
                    }
                }
            }
        }
    },
    get() {
        Service.get(self.searchParams)
            .then(function (resp) {
                var ticking = TickingModel.convert(resp);
                Service.updateData(ticking);
        }, function (err) {
            console.trace(err.message);
        });
    }
}