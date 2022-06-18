const SensorHexFrameToJSON = hexFrame => {
    var utf8 = Buffer.from(hexFrame, 'hex').toString('utf8');
    var arr = utf8.split('#');
    return arr.filter(x => x.includes(':')).reduce(FieldReducer, {});
};


const FieldReducer = (ac, cv) => {
    const [field, value] = cv.split(':');
    ac[ProcessField(field)] = ProcessValue(value);
    return ac;
};


module.exports = SensorHexFrameToJSON;