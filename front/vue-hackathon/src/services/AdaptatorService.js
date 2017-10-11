/**
 * Created by Alex on 22/03/2017.
 */
import Service from './Service';
import Store from '../store/index'
import GeoJson from '../assets/data/sta_parking.json'

function getColumnsHeaders(headers){
  let array = [];
  for(let p in headers){
    let column = {};
    column.name = p;
    column.type =headers[p].type;
    array.push(column)
  }
  return array;
}

function parseRow(row){
  let array = [];
  for(let column in row._source){
    array[Store.getters.getHeaders.indexOf(column)] = row._source[column]
  }
  return array;
}

function parseMap(row){
  return GeoJson;
}

function parseSimpleBuckets(buckets){
  let chart = {
    pie : { series : []},
    horizontalBar : {labels : [], series : []},
    treeMap : [],
  };
  for(let bucket in buckets){
    chart.pie.series.push(buckets[bucket].doc_count);
    chart.horizontalBar.labels.push(buckets[bucket].key);
    chart.horizontalBar.series.push(buckets[bucket].doc_count);
    chart.treeMap.push({ value : buckets[bucket].doc_count, name : buckets[bucket].key});
  }
  return chart;
}

export default {
    elastic : {
      headers(searchParams){
        return Service.mapping(searchParams)
          .then(function (resp) {
            return getColumnsHeaders(resp[searchParams.index].mappings[searchParams.type].properties);
          }, function (err) {
            console.trace(err.message);
          });
      },
      string(searchParams){
        return Service.get(searchParams)
          .then(function (resp) {
            let result = {
              table : {},
              hits : {},
              chart : {},
              map : {},
            }
            let array = []
            for(let row in resp.hits.hits){
              array.push(parseRow(resp.hits.hits[row]))
            }
            result.table = {rows :array};
            result.hits = resp.hits;
            result.chart = parseSimpleBuckets(resp.aggregations[Store.getters.getAgg].buckets);
            result.map = parseMap(resp.aggregations[Store.getters.getAgg].buckets);
            return result;
          }, function (err) {
            console.trace(err.message);
          });
      },
      date(searchParams){
        return Service.get(searchParams)
          .then(function (resp) {
            return 'coucou date';
          }, function (err) {
            console.trace(err.message);
          });
      },
      map(searchParams){
       return Service.get(searchParams)
          .then(function (resp) {
            if (resp.hits.hits.length > 0 && resp.hits.hits[0]._source && resp.hits.hits[0]._source.parking_x) {
              var model = [];
              resp.hits.hits.forEach(function(hit) {
                var data = {
                  "type":"Feature",
                  "geometry":{
                    "type":"Point",
                    "coordinates":[
                      parseFloat(hit._source.parking_x),
                      parseFloat(hit._source.parking_y)
                    ]
                  }
                };
                model.push(data);
              })
              return model;
            }
            return null;
          }, function (err) {
            console.trace(err.message);
          });
      }
    },
    csv : {

    }
}
