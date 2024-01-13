from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error
from sklearn.ensemble import RandomForestRegressor
import pandas as pd

windsor_data_path = "HousePrices.csv"

windsor_data = pd.read_csv(windsor_data_path)

print(windsor_data.describe())

