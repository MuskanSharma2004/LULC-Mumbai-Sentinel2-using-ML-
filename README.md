ACCESS TO ENTIRE SCRIPT VIA LINK https://code.earthengine.google.com/c77e077c36b098fc3cd80c8041f897c5
# LULC-Mumbai-Sentinel2-using-ML-
LULC classification of Mumbai using Sentinel-2 data and Random Forest in Google Earth Engine.
# 🌍 Land Use Land Cover (LULC) Classification of Mumbai using Sentinel-2 & Google Earth Engine

## 📌 Overview
This project focuses on generating a **Land Use Land Cover (LULC) map** of Mumbai using **Sentinel-2 satellite imagery** and **supervised machine learning (Random Forest)** in Google Earth Engine.
The aim is to classify different land cover types such as vegetation, water bodies, built-up areas, roads, and barren land.

## 📍 Study Area
* **Location:** Mumbai, India
* A highly urbanized coastal megacity with mixed land use patterns

## 🛰️ Dataset Used
* **Satellite:** Sentinel-2 Surface Reflectance
* **Source:** COPERNICUS/S2_SR_HARMONIZED
* **Spatial Resolution:** 10 meters

## 🧠 Methodology
### 1. Data Preprocessing
* Filtered Sentinel-2 imagery by:
  * Study area (Mumbai)
  * Date range (2017)
  * Cloud cover (< 20%)
* Created median composite image

### 2. False Color Composite (FCC)
* Band combination used:
  * B4 , B3 , B2
* Helps in clear identification of vegetation and urban features

### 3. Training Data Collection

* Manually digitized polygons for:
  * Water Bodies
  * Built-up Areas
  * Vegetation
  * Roads
  * Barren Land
* Each class assigned a numeric label

### 4. Feature Selection
Bands used for classification:
* B2 (Blue)
* B3 (Green)
* B4 (Red)
* B8 (NIR)
* B11 (SWIR1)
* B12 (SWIR2)

### 5. Supervised Classification
* Algorithm: **Random Forest Classifier**
* Training performed using:
* sampleRegions()  for extracting pixel values
* Model trained to distinguish between land cover classes

### 6. LULC Map Generation
* Applied trained classifier on full Sentinel-2 image
* Generated final LULC classified map

**_> Note: This script uses a manually imported Mumbai boundary and manually digitized training samples in Google Earth Engine. If you want to run it in your own account, replace these layers with your own study area and training polygons.**_

## 🗂️ Land Cover Classes
| Class | Description  |
| ----- | ------------ |
| 0     | Water Bodies |
| 1     | Built-up     |
| 2     | Vegetation   |
| 3     | Roads        |
| 4     | Barren Land  |

## 📊 Output
* Classified LULC map of Mumbai
* Exported as GeoTIFF using Google Earth Engine

## 💻 Tools & Technologies
* Google Earth Engine (GEE)
* JavaScript
* Sentinel-2 Satellite Data

## 📌 Key Learnings
* Understanding satellite data and spectral bands
* Working with supervised machine learning in GEE
* Importance of accurate training data
* Image classification workflow

## 👩‍💻 Author
Muskan Sharma

## ⭐ Acknowledgement
This project was developed using Google Earth Engine and Sentinel-2 data provided by ESA.
