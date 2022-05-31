from xml.sax.handler import feature_external_ges
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
import pickle
from flask_cors import CORS, cross_origin
import xgboost
from xgboost import XGBRegressor

app = Flask(__name__, template_folder='templates')
cors = CORS(app)
model = pickle.load(open('model_lr.pkl', 'rb'))
df = pd.read_csv('cleaned_df.csv')

@app.route('/',methods=['GET','POST'])
def index():
    brands = sorted(df['brand'].unique())
    car_models = sorted(df['car_model'].unique())
    years = sorted(df['year'].unique(), reverse=True)
    transmissions = df['transmission'].unique()
    fuelTypes = df['fuelType'].unique()

    brands.insert(0, 'Select Brand')
    return render_template('index.html', brands=brands, car_models=car_models, years=years, transmissions=transmissions, fuelTypes=fuelTypes)

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    car_model = request.form.get('car_models')
    year = request.form.get('year')
    transmission = request.form.get('transmission')
    fuelType = request.form.get('fuelType')
    mileage = request.form.get('mileage')
    tax = request.form.get('tax')
    mpg = request.form.get('mpg')
    engineSize = request.form.get('engineSize')

    map_model = {'Audi A1': 0, 'Audi A2': 1, 'Audi A3': 2, 'Audi A4': 3, 'Audi A5': 4, 'Audi A6': 5, 'Audi A7': 6, 'Audi A8': 7, 'Audi Q2': 8, 'Audi Q3': 9, 'Audi Q5': 10, 'Audi Q7': 11, 'Audi Q8': 12, 'Audi R8': 13, 'Audi RS3': 14, 'Audi RS4': 15, 'Audi RS5': 16, 'Audi RS6': 17, 'Audi RS7': 18, 'Audi S3': 19, 'Audi S4': 20, 'Audi S5': 21, 'Audi S8': 22, 'Audi SQ5': 23, 'Audi SQ7': 24, 'Audi TT': 25, 'BMW 1 Series': 26, 'BMW 2 Series': 27, 'BMW 3 Series': 28, 'BMW 4 Series': 29, 'BMW 5 Series': 30, 'BMW 6 Series': 31, 'BMW 7 Series': 32, 'BMW 8 Series': 33, 'BMW M2': 34, 'BMW M3': 35, 'BMW M4': 36, 'BMW M5': 37, 'BMW M6': 38, 'BMW X1': 39, 'BMW X2': 40, 'BMW X3': 41, 'BMW X4': 42, 'BMW X5': 43, 'BMW X6': 44, 'BMW X7': 45, 'BMW Z3': 46, 'BMW Z4': 47, 'BMW i3': 48, 'BMW i8': 49, 'Ford B-MAX': 50, 'Ford C-MAX': 51, 'Ford EcoSport': 52, 'Ford Edge': 53, 'Ford Escort': 54, 'Ford Fiesta': 55, 'Ford Focus': 56, 'Ford Fusion': 57, 'Ford Galaxy': 58, 'Ford Grand C-MAX': 59, 'Ford Grand Tourneo Connect': 60, 'Ford KA': 61, 'Ford Ka+': 62, 'Ford Kuga': 63, 'Ford Mondeo': 64, 'Ford Mustang': 65, 'Ford Puma': 66, 'Ford Ranger': 67, 'Ford S-MAX': 68, 'Ford Streetka': 69, 'Ford Tourneo Connect': 70, 'Ford Tourneo Custom': 71, 'Ford Transit Tourneo': 72, 'Hyundai Accent': 73, 'Hyundai Amica': 74, 'Hyundai Getz': 75, 'Hyundai I10': 76, 'Hyundai I20': 77, 'Hyundai I30': 78, 'Hyundai I40': 79, 'Hyundai I800': 80, 'Hyundai IX20': 81, 'Hyundai IX35': 82, 'Hyundai Ioniq': 83, 'Hyundai Kona': 84, 'Hyundai Santa Fe': 85, 'Hyundai Terracan': 86, 'Hyundai Tucson': 87, 'Hyundai Veloster': 88, 'Mercedes A Class': 89, 'Mercedes B Class': 90, 'Mercedes C Class': 91, 'Mercedes CL Class': 92, 'Mercedes CLA Class': 93, 'Mercedes CLC Class': 94, 'Mercedes CLK': 95, 'Mercedes CLS Class': 96, 'Mercedes E Class': 97, 'Mercedes G Class': 98, 'Mercedes GL Class': 99, 'Mercedes GLA Class': 100, 'Mercedes GLB Class': 101, 'Mercedes GLC Class': 102, 'Mercedes GLE Class': 103, 'Mercedes GLS Class': 104, 'Mercedes M Class': 105, 'Mercedes R Class': 106, 'Mercedes S Class': 107, 'Mercedes SL CLASS': 108, 'Mercedes SLK': 109, 'Mercedes V Class': 110, 'Mercedes X-CLASS': 111, 'Mercedes 180': 112, 'Mercedes 200': 113, 'Mercedes 220': 114, 'Mercedes 230': 115, 'Toyota Auris': 116, 'Toyota Avensis': 117, 'Toyota Aygo': 118, 'Toyota C-HR': 119, 'Toyota Camry': 120, 'Toyota Corolla': 121, 'Toyota GT86': 122, 'Toyota Hilux': 123, 'Toyota IQ': 124, 'Toyota Land Cruiser': 125, 'Toyota PROACE VERSO': 126, 'Toyota Prius': 127, 'Toyota RAV4': 128, 'Toyota Supra': 129, 'Toyota Urban Cruiser': 130, 'Toyota Verso': 131, 'Toyota Verso-S': 132, 'Toyota Yaris': 133, 'VW Amarok': 134, 'VW Arteon': 135, 'VW Beetle': 136, 'VW CC': 137, 'VW Caddy': 138, 'VW Caddy Life': 139, 'VW Caddy Maxi': 140, 'VW Caddy Maxi Life': 141, 'VW California': 142, 'VW Caravelle': 143, 'VW Eos': 144, 'VW Fox': 145, 'VW Golf': 146, 'VW Golf SV': 147, 'VW Jetta': 148, 'VW Passat': 149, 'VW Polo': 150, 'VW Scirocco': 151, 'VW Sharan': 152, 'VW Shuttle': 153, 'VW T-Cross': 154, 'VW T-Roc': 155, 'VW Tiguan': 156, 'VW Tiguan Allspace': 157, 'VW Touareg': 158, 'VW Touran': 159, 'VW Up': 160}
    map_year = {'1970': 0, '1996': 1, '1997': 2, '1998': 3, '1999': 4, '2000': 5, '2001': 6, '2002': 7, '2003': 8, '2004': 9, '2005': 10, '2006': 11, '2007': 12, '2008': 13, '2009': 14, '2010': 15, '2011': 16, '2012': 17, '2013': 18, '2014': 19, '2015': 20, '2016': 21, '2017': 22, '2018': 23, '2019': 24, '2020': 25, '2060': 26}
    map_transmission = {'Automatic': 0, 'Manual': 1, 'Other': 2, 'Semi-Auto': 3}
    map_fuelType = {'Diesel': 0, 'Electric': 1, 'Hybrid': 2, 'Other': 3, 'Petrol': 4}

    car_model = map_model[car_model]
    year = map_year[year]
    transmission = map_transmission[transmission]
    fuelType = map_fuelType[fuelType]

    features = np.array([year, transmission, mileage, fuelType, tax, mpg, engineSize, car_model]).astype('float')
    col_names = ['year', 'transmission', 'mileage', 'fuelType', 'tax', 'mpg', 'engineSize', 'brand_model']
    final_features=pd.DataFrame(data=[features], columns=col_names)
    prediction = model.predict(final_features)

    return render_template('index.html', prediction_text='${}'.format(str(np.round(prediction[0], 2))))

if __name__ == '__main__':
    app.run()