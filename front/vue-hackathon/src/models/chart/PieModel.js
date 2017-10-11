export default {
    convert(model) {
        var newModel = { type:'pie' };
        newModel.data = { series: [5, 3, 4] };
        return newModel;
    }
}