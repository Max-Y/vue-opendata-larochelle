import HorizontalBarModel from './chart/HorizontalBarModel'
import PieModel from './chart/PieModel'
import SimpleLineModel from './chart/SimpleLineModel'
import TreeMapModel from './chart/TreeMapModel'

export default {
    convert(model) {
        var newModel = [];
        //newModel.push(HorizontalBarModel.convert(model));
        newModel.push(TreeMapModel.convert(model));
        newModel.push(PieModel.convert(model));
        newModel.push(SimpleLineModel.convert(model));
        return newModel;
    }
}