export default {
    convert(model) {
        var newModel = { type:'treeMap' };
        newModel.data =  [
              {"value": 100, "name": "alpha"},
              {"value": 70, "name": "beta"},
              {"value": 40, "name": "gamma"},
              {"value": 15, "name": "delta"},
              {"value": 5, "name": "epsilon"},
              {"value": 1, "name": "zeta"}
            ];
        return newModel;
    }
}