module.exports = function main(inputs) {
    // write your code here...
    return Math.round(inputs.distance<=2?6+0.25*inputs.parkTime:6+0.8*(inputs.distance-2)+0.25*inputs.parkTime+0.4*Math.max(0,inputs.distance-8));
};
