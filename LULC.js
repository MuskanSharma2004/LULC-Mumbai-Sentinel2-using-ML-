Map.centerObject(Mumbai, 10)
Map.addLayer(Mumbai , {}, 'Mumbai');
var S2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED").filterBounds(Mumbai).filterDate('2017-01-01','2017-12-31').filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20)).median().clip(Mumbai);
var visualization = {
  min: 0,
  max: 3000,
  bands: ['B4', 'B3', 'B2'],
};
Map.addLayer (S2, visualization, 'S2')
var water = ee.FeatureCollection(WaterBody).map(function(f){
  return f.set('class' ,0);
});
var Vegetation = ee.FeatureCollection(GreenCover).map(function(f){
  return f.set('class', 1);
});
var BuiltUp = ee.FeatureCollection(UrbanSpace).map(function(f){
  return f.set('class', 2);
});
var Barren_Open = ee.FeatureCollection(BarrenOpen).map(function(f){
  return f.set('class', 3);
});
var Roads = ee.FeatureCollection(Routes).map(function(f){
  return f.set('class', 4);
});
var trainingPolygons = water.merge(Vegetation).merge(BuiltUp).merge(Barren_Open).merge(Roads);
var bands = ['B2', 'B3', 'B4', 'B8', 'B11', 'B12'];
var training = S2.select(bands).sampleRegions({
  collection: trainingPolygons,
  properties: ['class'],
  scale: 10
});
var classifier = ee.Classifier.smileRandomForest(100).train({
  features: training,
  classProperty: 'class',
  inputProperties: bands
});
var classified = S2.select(bands).classify(classifier);
Map.addLayer(classified, {
  min: 0,
  max: 4,
  palette: ['blue', 'Green', 'Red', 'yellow', 'grey']
}, 'LULC');
Export.image.toDrive({
  image: classified,
  description: 'LULC_Mumbai',
  folder: 'GEE',
  fileNamePrefix: 'lulc_map',
  region: Mumbai,
  scale: 10,
  maxPixels: 1e13
});
