export default {
    laData: {
        series: []
    },
    convert(model) {
        var self = this;
        var buckets = model.aggregations['group-musee'].buckets;
        for (let p in buckets) {
            self.laData.series.push({
                name: buckets[p].key,
                data: buckets[p].doc_count
            })
        }
        return self.laData;
    }
}