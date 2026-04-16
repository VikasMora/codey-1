import React from 'react';
import '../Navbarweb.css';

function DataScienceBasics() {
  return (
    <div className="py-topic-container">
      <div className="py-topic-header">
        <h1>📊 Data Science Basics</h1>
        <p className="py-topic-subtitle">Introduction to data science with Python</p>
      </div>
      <div className="py-topic-content">
        
        {/* Introduction */}
        <section className="py-topic-section">
          <h2>📖 What is Data Science?</h2>
          <p>
            Data Science is an interdisciplinary field that uses scientific methods, algorithms, and systems 
            to extract knowledge and insights from structured and unstructured data.
          </p>
          
          <h3>The Data Science Process</h3>
          <ol>
            <li><strong>Data Collection:</strong> Gathering data from various sources</li>
            <li><strong>Data Cleaning:</strong> Preprocessing and cleaning messy data</li>
            <li><strong>Exploratory Data Analysis (EDA):</strong> Understanding patterns in data</li>
            <li><strong>Feature Engineering:</strong> Creating meaningful variables</li>
            <li><strong>Modeling:</strong> Building predictive or descriptive models</li>
            <li><strong>Validation:</strong> Testing and validating model performance</li>
            <li><strong>Deployment:</strong> Implementing solutions in production</li>
            <li><strong>Communication:</strong> Presenting findings to stakeholders</li>
          </ol>

          <h3>Why Python for Data Science?</h3>
          <ul>
            <li><strong>Rich Ecosystem:</strong> Extensive libraries (NumPy, Pandas, Scikit-learn)</li>
            <li><strong>Easy to Learn:</strong> Readable syntax and gentle learning curve</li>
            <li><strong>Community Support:</strong> Large, active data science community</li>
            <li><strong>Jupyter Notebooks:</strong> Interactive development environment</li>
            <li><strong>Integration:</strong> Works well with databases, web frameworks, and deployment tools</li>
          </ul>
        </section>

        {/* Setting Up Environment */}
        <section className="py-topic-section">
          <h2>🔧 Setting Up Your Data Science Environment</h2>
          
          <h3>Installing Essential Libraries</h3>
          <div className="code-example">
            <pre><code>{`# Core data science libraries
pip install numpy pandas matplotlib seaborn

# Machine learning
pip install scikit-learn

# Jupyter notebook
pip install jupyter

# Statistical analysis
pip install scipy statsmodels

# Alternative: Install Anaconda distribution
# Anaconda includes all essential data science packages
# Download from: https://www.anaconda.com/products/distribution`}</code></pre>
          </div>

          <h3>Starting Jupyter Notebook</h3>
          <div className="code-example">
            <pre><code>{`# Start Jupyter Notebook
jupyter notebook

# Or use Jupyter Lab (modern interface)
pip install jupyterlab
jupyter lab`}</code></pre>
          </div>
        </section>

        {/* NumPy Fundamentals */}
        <section className="py-topic-section">
          <h2>🔢 NumPy - Numerical Computing Foundation</h2>
          <p>
            NumPy (Numerical Python) is the foundation of data science in Python, providing 
            efficient operations on large arrays and matrices.
          </p>

          <div className="code-example">
            <h4>Creating and Manipulating Arrays:</h4>
            <pre><code>{`import numpy as np

# Creating arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([[1, 2, 3], [4, 5, 6]])

# Array properties
print(f"Shape: {arr2.shape}")        # (2, 3)
print(f"Data type: {arr1.dtype}")    # int64
print(f"Dimensions: {arr2.ndim}")    # 2

# Creating special arrays
zeros = np.zeros((3, 4))              # Array of zeros
ones = np.ones((2, 3))                # Array of ones
identity = np.eye(3)                  # Identity matrix
random_arr = np.random.random((2, 3)) # Random values [0, 1)

# Array operations
arr = np.array([1, 2, 3, 4, 5])
print(f"Sum: {np.sum(arr)}")          # 15
print(f"Mean: {np.mean(arr)}")        # 3.0
print(f"Standard deviation: {np.std(arr)}")  # 1.58

# Element-wise operations
squared = arr ** 2                    # [1, 4, 9, 16, 25]
sqrt_arr = np.sqrt(arr)              # Square root of each element

# Boolean indexing
filtered = arr[arr > 3]              # [4, 5]`}</code></pre>
          </div>

          <div className="code-example">
            <h4>Array Reshaping and Indexing:</h4>
            <pre><code>{`# Reshaping arrays
arr = np.arange(12)                  # [0, 1, 2, ..., 11]
reshaped = arr.reshape(3, 4)         # 3x4 matrix

# Indexing and slicing
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(matrix[0, 1])                  # 2 (first row, second column)
print(matrix[1:, :2])                # Rows 1-2, columns 0-1

# Advanced indexing
indices = [0, 2]
print(matrix[indices])               # Rows 0 and 2

# Conditional indexing
mask = matrix > 5
print(matrix[mask])                  # [6, 7, 8, 9]`}</code></pre>
          </div>
        </section>

        {/* Pandas Data Manipulation */}
        <section className="py-topic-section">
          <h2>🐼 Pandas - Data Manipulation and Analysis</h2>
          <p>
            Pandas provides data structures and operations for manipulating numerical tables 
            and time series data.
          </p>

          <div className="code-example">
            <h4>Creating DataFrames and Series:</h4>
            <pre><code>{`import pandas as pd
import numpy as np

# Creating a DataFrame from dictionary
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'Age': [25, 30, 35, 28, 32],
    'City': ['New York', 'London', 'Tokyo', 'Paris', 'Berlin'],
    'Salary': [70000, 80000, 90000, 75000, 85000]
}
df = pd.DataFrame(data)

# Basic DataFrame operations
print(df.head())                     # First 5 rows
print(df.tail(3))                    # Last 3 rows
print(df.info())                     # Data types and non-null counts
print(df.describe())                 # Statistical summary

# Selecting columns
names = df['Name']                   # Series
subset = df[['Name', 'Age']]        # DataFrame

# Filtering rows
young_people = df[df['Age'] < 30]
high_earners = df[df['Salary'] > 80000]

# Multiple conditions
young_high_earners = df[(df['Age'] < 30) & (df['Salary'] > 70000)]`}</code></pre>
          </div>

          <div className="code-example">
            <h4>Data Cleaning and Preprocessing:</h4>
            <pre><code>{`# Creating sample data with missing values
data_with_nulls = {
    'A': [1, 2, np.nan, 4, 5],
    'B': [np.nan, 2, 3, 4, 5],
    'C': [1, 2, 3, 4, np.nan],
    'D': ['x', 'y', 'x', 'z', 'y']
}
df_nulls = pd.DataFrame(data_with_nulls)

# Handling missing values
print(df_nulls.isnull().sum())       # Count null values per column
df_cleaned = df_nulls.dropna()       # Remove rows with any null values
df_filled = df_nulls.fillna(0)       # Fill nulls with 0

# Forward fill and backward fill
df_ffill = df_nulls.fillna(method='ffill')  # Forward fill
df_bfill = df_nulls.fillna(method='bfill')  # Backward fill

# Fill with column mean
df_nulls['A'].fillna(df_nulls['A'].mean(), inplace=True)

# Removing duplicates
df_no_dupes = df.drop_duplicates()

# Data type conversion
df['Age'] = df['Age'].astype('int32')
df['City'] = df['City'].astype('category')  # For memory efficiency`}</code></pre>
          </div>

          <div className="code-example">
            <h4>Grouping and Aggregation:</h4>
            <pre><code>{`# Sample sales data
sales_data = {
    'Product': ['A', 'B', 'A', 'C', 'B', 'A', 'C'],
    'Region': ['North', 'South', 'North', 'East', 'South', 'East', 'North'],
    'Sales': [100, 150, 200, 120, 180, 160, 140],
    'Quantity': [10, 15, 20, 12, 18, 16, 14]
}
sales_df = pd.DataFrame(sales_data)

# Group by single column
product_sales = sales_df.groupby('Product')['Sales'].sum()
print(product_sales)

# Group by multiple columns
region_product = sales_df.groupby(['Region', 'Product'])['Sales'].mean()

# Multiple aggregation functions
agg_results = sales_df.groupby('Product').agg({
    'Sales': ['sum', 'mean', 'count'],
    'Quantity': ['sum', 'max']
})

# Custom aggregation
def sales_range(series):
    return series.max() - series.min()

custom_agg = sales_df.groupby('Region')['Sales'].apply(sales_range)`}</code></pre>
          </div>
        </section>

        {/* Data Visualization */}
        <section className="py-topic-section">
          <h2>📊 Data Visualization with Matplotlib and Seaborn</h2>
          
          <div className="code-example">
            <h4>Basic Matplotlib Plots:</h4>
            <pre><code>{`import matplotlib.pyplot as plt
import numpy as np

# Set up the plotting style
plt.style.use('seaborn-v0_8')  # Modern seaborn style
plt.rcParams['figure.figsize'] = (10, 6)

# Line plot
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

plt.figure(figsize=(12, 8))

plt.subplot(2, 2, 1)
plt.plot(x, y1, label='sin(x)', color='blue', linewidth=2)
plt.plot(x, y2, label='cos(x)', color='red', linewidth=2)
plt.title('Trigonometric Functions')
plt.xlabel('X values')
plt.ylabel('Y values')
plt.legend()
plt.grid(True)

# Bar plot
categories = ['A', 'B', 'C', 'D', 'E']
values = [23, 45, 56, 78, 32]

plt.subplot(2, 2, 2)
bars = plt.bar(categories, values, color=['red', 'green', 'blue', 'orange', 'purple'])
plt.title('Category Values')
plt.ylabel('Values')

# Add value labels on bars
for bar, value in zip(bars, values):
    plt.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 1, 
             str(value), ha='center', va='bottom')

# Histogram
data = np.random.normal(100, 15, 1000)  # Normal distribution

plt.subplot(2, 2, 3)
plt.hist(data, bins=30, alpha=0.7, color='skyblue', edgecolor='black')
plt.title('Distribution of Data')
plt.xlabel('Values')
plt.ylabel('Frequency')

# Scatter plot
x_scatter = np.random.randn(100)
y_scatter = 2 * x_scatter + np.random.randn(100) * 0.5

plt.subplot(2, 2, 4)
plt.scatter(x_scatter, y_scatter, alpha=0.6, c=y_scatter, cmap='viridis')
plt.title('Scatter Plot with Color Mapping')
plt.xlabel('X values')
plt.ylabel('Y values')
plt.colorbar()

plt.tight_layout()
plt.show()`}</code></pre>
          </div>

          <div className="code-example">
            <h4>Advanced Visualization with Seaborn:</h4>
            <pre><code>{`import seaborn as sns

# Load sample dataset
tips = sns.load_dataset('tips')
iris = sns.load_dataset('iris')

# Set seaborn style
sns.set_style("whitegrid")

# Create subplots
fig, axes = plt.subplots(2, 3, figsize=(18, 12))

# Box plot
sns.boxplot(data=tips, x='day', y='total_bill', ax=axes[0,0])
axes[0,0].set_title('Total Bill by Day')

# Violin plot
sns.violinplot(data=tips, x='day', y='total_bill', hue='sex', ax=axes[0,1])
axes[0,1].set_title('Total Bill Distribution by Day and Gender')

# Correlation heatmap
correlation_matrix = tips.select_dtypes(include=[np.number]).corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0, ax=axes[0,2])
axes[0,2].set_title('Correlation Matrix')

# Pair plot (separate figure for better visibility)
plt.figure(figsize=(10, 8))
sns.pairplot(iris, hue='species', markers=['o', 's', 'D'])
plt.suptitle('Iris Dataset Pair Plot', y=1.02)

# Distribution plots
plt.figure(figsize=(15, 5))

plt.subplot(1, 3, 1)
sns.histplot(data=tips, x='total_bill', kde=True, bins=20)
plt.title('Distribution of Total Bill')

plt.subplot(1, 3, 2)
sns.scatterplot(data=tips, x='total_bill', y='tip', hue='time', size='size')
plt.title('Tip vs Total Bill')

plt.subplot(1, 3, 3)
sns.barplot(data=tips, x='day', y='total_bill', estimator=np.mean, ci=95)
plt.title('Average Total Bill by Day')

plt.tight_layout()
plt.show()`}</code></pre>
          </div>
        </section>

        {/* Exploratory Data Analysis */}
        <section className="py-topic-section">
          <h2>🔍 Exploratory Data Analysis (EDA)</h2>
          <p>
            EDA is the process of analyzing datasets to summarize their main characteristics, 
            often using visual methods.
          </p>

          <div className="code-example">
            <h4>Complete EDA Workflow:</h4>
            <pre><code>{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load or create sample dataset
np.random.seed(42)
n_samples = 1000

data = {
    'age': np.random.normal(35, 10, n_samples).astype(int),
    'income': np.random.lognormal(10, 0.5, n_samples),
    'education_years': np.random.normal(14, 3, n_samples).astype(int),
    'experience': np.random.normal(10, 5, n_samples).astype(int),
    'gender': np.random.choice(['M', 'F'], n_samples),
    'city_tier': np.random.choice(['T1', 'T2', 'T3'], n_samples, p=[0.3, 0.4, 0.3])
}

df = pd.DataFrame(data)

# Ensure realistic constraints
df['age'] = np.clip(df['age'], 18, 70)
df['education_years'] = np.clip(df['education_years'], 8, 20)
df['experience'] = np.clip(df['experience'], 0, df['age'] - 18)

print("=== DATASET OVERVIEW ===")
print(f"Dataset shape: {df.shape}")
print(f"\\nColumn names: {list(df.columns)}")
print(f"\\nData types:\\n{df.dtypes}")

print("\\n=== BASIC STATISTICS ===")
print(df.describe())

print("\\n=== MISSING VALUES ===")
missing_values = df.isnull().sum()
print(missing_values[missing_values > 0])  # Only show columns with missing values

print("\\n=== CATEGORICAL VARIABLES ===")
categorical_cols = df.select_dtypes(include=['object']).columns
for col in categorical_cols:
    print(f"\\n{col}:")
    print(df[col].value_counts())

# Visualizations
fig, axes = plt.subplots(3, 3, figsize=(20, 15))

# Distribution of numerical variables
numerical_cols = df.select_dtypes(include=[np.number]).columns
for i, col in enumerate(numerical_cols):
    row, col_idx = i // 2, i % 2
    if row < 2:  # Only plot first 4 numerical columns
        sns.histplot(data=df, x=col, kde=True, ax=axes[row, col_idx])
        axes[row, col_idx].set_title(f'Distribution of {col}')

# Correlation heatmap
sns.heatmap(df.select_dtypes(include=[np.number]).corr(), 
           annot=True, cmap='coolwarm', center=0, ax=axes[0, 2])
axes[0, 2].set_title('Correlation Matrix')

# Box plots for categorical vs numerical
sns.boxplot(data=df, x='gender', y='income', ax=axes[1, 2])
axes[1, 2].set_title('Income by Gender')

# Scatter plots to find relationships
sns.scatterplot(data=df, x='age', y='income', hue='education_years', ax=axes[2, 0])
axes[2, 0].set_title('Age vs Income (colored by Education)')

sns.scatterplot(data=df, x='experience', y='income', hue='gender', ax=axes[2, 1])
axes[2, 1].set_title('Experience vs Income (colored by Gender)')

# Count plot for categorical variables
sns.countplot(data=df, x='city_tier', hue='gender', ax=axes[2, 2])
axes[2, 2].set_title('City Tier Distribution by Gender')

plt.tight_layout()
plt.show()`}</code></pre>
          </div>

          <div className="code-example">
            <h4>Statistical Analysis:</h4>
            <pre><code>{`from scipy import stats

print("=== STATISTICAL TESTS ===")

# Test for normality
numerical_cols = ['age', 'income', 'education_years', 'experience']
for col in numerical_cols:
    statistic, p_value = stats.shapiro(df[col].sample(min(1000, len(df))))
    print(f"{col} - Normality test p-value: {p_value:.4f}")
    if p_value > 0.05:
        print(f"  → {col} appears to be normally distributed")
    else:
        print(f"  → {col} is not normally distributed")

print("\\n=== CORRELATION ANALYSIS ===")
# Pearson correlation for normally distributed data
# Spearman correlation for non-normal data
corr_pearson = df[numerical_cols].corr(method='pearson')
corr_spearman = df[numerical_cols].corr(method='spearman')

print("Strong correlations (|r| > 0.5):")
for i in range(len(numerical_cols)):
    for j in range(i+1, len(numerical_cols)):
        pearson_corr = corr_pearson.iloc[i, j]
        spearman_corr = corr_spearman.iloc[i, j]
        
        if abs(pearson_corr) > 0.5:
            print(f"{numerical_cols[i]} vs {numerical_cols[j]}: "
                  f"Pearson={pearson_corr:.3f}, Spearman={spearman_corr:.3f}")

print("\\n=== GROUP COMPARISONS ===")
# T-test for comparing groups
male_income = df[df['gender'] == 'M']['income']
female_income = df[df['gender'] == 'F']['income']

t_stat, p_value = stats.ttest_ind(male_income, female_income)
print(f"Gender income difference - t-statistic: {t_stat:.3f}, p-value: {p_value:.4f}")

if p_value < 0.05:
    print("  → Significant difference in income between genders")
else:
    print("  → No significant difference in income between genders")

# ANOVA for comparing multiple groups
t1_income = df[df['city_tier'] == 'T1']['income']
t2_income = df[df['city_tier'] == 'T2']['income']
t3_income = df[df['city_tier'] == 'T3']['income']

f_stat, p_value = stats.f_oneway(t1_income, t2_income, t3_income)
print(f"\\nCity tier income difference - F-statistic: {f_stat:.3f}, p-value: {p_value:.4f}")

if p_value < 0.05:
    print("  → Significant difference in income across city tiers")
else:
    print("  → No significant difference in income across city tiers")`}</code></pre>
          </div>
        </section>

        {/* Basic Machine Learning */}
        <section className="py-topic-section">
          <h2>🤖 Introduction to Machine Learning</h2>
          
          <div className="code-example">
            <h4>Linear Regression Example:</h4>
            <pre><code>{`from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.preprocessing import StandardScaler

# Prepare data for machine learning
# Predicting income based on age, education, and experience
X = df[['age', 'education_years', 'experience']]
y = df['income']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Scale features (important for many ML algorithms)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Create and train the model
model = LinearRegression()
model.fit(X_train_scaled, y_train)

# Make predictions
y_pred_train = model.predict(X_train_scaled)
y_pred_test = model.predict(X_test_scaled)

# Evaluate the model
train_mse = mean_squared_error(y_train, y_pred_train)
test_mse = mean_squared_error(y_test, y_pred_test)
train_r2 = r2_score(y_train, y_pred_train)
test_r2 = r2_score(y_test, y_pred_test)

print("=== LINEAR REGRESSION RESULTS ===")
print(f"Training MSE: {train_mse:.2f}")
print(f"Testing MSE: {test_mse:.2f}")
print(f"Training R²: {train_r2:.3f}")
print(f"Testing R²: {test_r2:.3f}")

# Feature importance
feature_names = ['Age', 'Education Years', 'Experience']
coefficients = model.coef_
intercept = model.intercept_

print(f"\\nModel equation: Income = {intercept:.2f}")
for name, coef in zip(feature_names, coefficients):
    print(f"  + {coef:.2f} × {name}")

# Visualize results
plt.figure(figsize=(12, 4))

plt.subplot(1, 3, 1)
plt.scatter(y_test, y_pred_test, alpha=0.6)
plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--', lw=2)
plt.xlabel('Actual Income')
plt.ylabel('Predicted Income')
plt.title('Actual vs Predicted Income')

plt.subplot(1, 3, 2)
residuals = y_test - y_pred_test
plt.scatter(y_pred_test, residuals, alpha=0.6)
plt.axhline(y=0, color='r', linestyle='--')
plt.xlabel('Predicted Income')
plt.ylabel('Residuals')
plt.title('Residual Plot')

plt.subplot(1, 3, 3)
plt.bar(feature_names, coefficients)
plt.title('Feature Coefficients')
plt.ylabel('Coefficient Value')
plt.xticks(rotation=45)

plt.tight_layout()
plt.show()`}</code></pre>
          </div>

          <div className="code-example">
            <h4>Classification Example:</h4>
            <pre><code>{`from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# Create a binary classification problem
# Predict if someone has high income (>median)
median_income = df['income'].median()
df['high_income'] = (df['income'] > median_income).astype(int)

# Prepare features
X = pd.get_dummies(df[['age', 'education_years', 'experience', 'gender', 'city_tier']])
y = df['high_income']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Train Random Forest classifier
rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)

# Make predictions
y_pred = rf_model.predict(X_test)
y_pred_proba = rf_model.predict_proba(X_test)[:, 1]

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print("=== CLASSIFICATION RESULTS ===")
print(f"Accuracy: {accuracy:.3f}")
print("\\nClassification Report:")
print(classification_report(y_test, y_pred))

# Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', 
            xticklabels=['Low Income', 'High Income'],
            yticklabels=['Low Income', 'High Income'])
plt.title('Confusion Matrix')
plt.ylabel('Actual')
plt.xlabel('Predicted')
plt.show()

# Feature importance
feature_importance = pd.DataFrame({
    'feature': X.columns,
    'importance': rf_model.feature_importances_
}).sort_values('importance', ascending=False)

plt.figure(figsize=(10, 6))
sns.barplot(data=feature_importance.head(10), x='importance', y='feature')
plt.title('Top 10 Most Important Features')
plt.xlabel('Feature Importance')
plt.show()

print("\\nTop 5 Most Important Features:")
for idx, row in feature_importance.head().iterrows():
    print(f"{row['feature']}: {row['importance']:.3f}")`}</code></pre>
          </div>
        </section>

        {/* Data Import/Export */}
        <section className="py-topic-section">
          <h2>💾 Data Import and Export</h2>
          
          <div className="code-example">
            <h4>Working with Different File Formats:</h4>
            <pre><code>{`import pandas as pd

# CSV files
df = pd.read_csv('data.csv')
df.to_csv('output.csv', index=False)

# Excel files
df_excel = pd.read_excel('data.xlsx', sheet_name='Sheet1')
df.to_excel('output.xlsx', sheet_name='Results', index=False)

# JSON files
df_json = pd.read_json('data.json')
df.to_json('output.json', orient='records', indent=2)

# Parquet files (efficient for large datasets)
df.to_parquet('output.parquet')
df_parquet = pd.read_parquet('output.parquet')

# Reading with specific options
df_custom = pd.read_csv('data.csv', 
                       sep=';',           # Different separator
                       decimal=',',       # Different decimal separator
                       encoding='utf-8',  # Encoding
                       parse_dates=['date_column'],  # Parse dates
                       na_values=['NULL', 'N/A', ''])  # Custom null values

# Database connections
import sqlite3

# SQLite
conn = sqlite3.connect('database.db')
df_db = pd.read_sql_query("SELECT * FROM table_name", conn)
df.to_sql('new_table', conn, if_exists='replace', index=False)
conn.close()

# For other databases (PostgreSQL, MySQL, etc.)
# from sqlalchemy import create_engine
# engine = create_engine('postgresql://user:password@host:port/database')
# df = pd.read_sql('SELECT * FROM table', engine)`}</code></pre>
          </div>
        </section>

        {/* Time Series Basics */}
        <section className="py-topic-section">
          <h2>📈 Time Series Analysis Basics</h2>
          
          <div className="code-example">
            <pre><code>{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime, timedelta

# Create sample time series data
dates = pd.date_range(start='2020-01-01', end='2023-12-31', freq='D')
np.random.seed(42)

# Generate synthetic time series with trend and seasonality
trend = np.linspace(100, 200, len(dates))
seasonal = 10 * np.sin(2 * np.pi * np.arange(len(dates)) / 365.25)
noise = np.random.normal(0, 5, len(dates))
values = trend + seasonal + noise

ts_df = pd.DataFrame({
    'date': dates,
    'value': values
})
ts_df.set_index('date', inplace=True)

# Basic time series operations
print("=== TIME SERIES ANALYSIS ===")
print(f"Data range: {ts_df.index.min()} to {ts_df.index.max()}")
print(f"Frequency: {ts_df.index.freq}")

# Resampling (aggregation)
monthly_mean = ts_df.resample('M').mean()
quarterly_sum = ts_df.resample('Q').sum()

# Rolling statistics
ts_df['rolling_mean_30'] = ts_df['value'].rolling(window=30).mean()
ts_df['rolling_std_30'] = ts_df['value'].rolling(window=30).std()

# Basic plotting
plt.figure(figsize=(15, 10))

plt.subplot(3, 1, 1)
plt.plot(ts_df.index, ts_df['value'], alpha=0.7, label='Original')
plt.plot(ts_df.index, ts_df['rolling_mean_30'], color='red', label='30-day Moving Average')
plt.title('Time Series with Moving Average')
plt.legend()

plt.subplot(3, 1, 2)
plt.plot(monthly_mean.index, monthly_mean['value'], marker='o')
plt.title('Monthly Average')
plt.ylabel('Value')

plt.subplot(3, 1, 3)
plt.plot(ts_df.index, ts_df['rolling_std_30'], color='green')
plt.title('30-day Rolling Standard Deviation')
plt.ylabel('Standard Deviation')
plt.xlabel('Date')

plt.tight_layout()
plt.show()

# Seasonal decomposition (requires statsmodels)
try:
    from statsmodels.tsa.seasonal import seasonal_decompose
    
    decomposition = seasonal_decompose(ts_df['value'], model='additive', period=365)
    
    fig, axes = plt.subplots(4, 1, figsize=(15, 12))
    decomposition.observed.plot(ax=axes[0], title='Original')
    decomposition.trend.plot(ax=axes[1], title='Trend')
    decomposition.seasonal.plot(ax=axes[2], title='Seasonal')
    decomposition.resid.plot(ax=axes[3], title='Residual')
    plt.tight_layout()
    plt.show()
    
except ImportError:
    print("Install statsmodels for seasonal decomposition: pip install statsmodels")`}</code></pre>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-topic-section">
          <h2>💡 Data Science Best Practices</h2>
          
          <h3>🔄 Reproducible Research</h3>
          <ul>
            <li><strong>Set Random Seeds:</strong> Use <code>np.random.seed()</code> for reproducible results</li>
            <li><strong>Version Control:</strong> Use Git to track changes in your analysis</li>
            <li><strong>Document Everything:</strong> Write clear comments and markdown in notebooks</li>
            <li><strong>Environment Management:</strong> Use virtual environments and requirements.txt</li>
          </ul>

          <h3>📊 Data Quality</h3>
          <ul>
            <li><strong>Always Explore First:</strong> Understand your data before modeling</li>
            <li><strong>Handle Missing Values:</strong> Don't ignore null values</li>
            <li><strong>Check for Outliers:</strong> Identify and handle extreme values appropriately</li>
            <li><strong>Validate Data Types:</strong> Ensure columns have correct data types</li>
          </ul>

          <h3>🎯 Model Development</h3>
          <ul>
            <li><strong>Train/Validation/Test Split:</strong> Always keep test data separate</li>
            <li><strong>Cross-Validation:</strong> Use k-fold cross-validation for model selection</li>
            <li><strong>Feature Engineering:</strong> Create meaningful features from raw data</li>
            <li><strong>Model Interpretability:</strong> Understand what your model is learning</li>
          </ul>

          <div className="code-example">
            <h4>Project Structure Template:</h4>
            <pre><code>{`data_science_project/
├── data/
│   ├── raw/                 # Original, immutable data
│   ├── processed/           # Cleaned and processed data
│   └── external/            # External data sources
├── notebooks/
│   ├── 01_exploratory_analysis.ipynb
│   ├── 02_data_cleaning.ipynb
│   ├── 03_feature_engineering.ipynb
│   └── 04_modeling.ipynb
├── src/
│   ├── data_processing.py   # Data cleaning functions
│   ├── feature_engineering.py
│   ├── modeling.py          # Model training functions
│   └── visualization.py     # Plotting functions
├── models/                  # Trained models
├── reports/                 # Generated analysis reports
├── requirements.txt         # Python dependencies
├── README.md               # Project description
└── .gitignore              # Git ignore file`}</code></pre>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="py-topic-section">
          <h2>🏋️ Practice Exercises</h2>
          
          <div className="exercise-box">
            <h3>Exercise 1: Sales Data Analysis</h3>
            <p>Analyze a retail sales dataset to uncover business insights:</p>
            <ul>
              <li>Load and clean the sales data</li>
              <li>Perform exploratory data analysis</li>
              <li>Identify seasonal trends and patterns</li>
              <li>Calculate key business metrics (revenue, growth rates)</li>
              <li>Create visualizations to communicate findings</li>
              <li>Build a simple forecasting model</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>Exercise 2: Customer Segmentation</h3>
            <p>Segment customers based on purchasing behavior:</p>
            <ul>
              <li>Load customer transaction data</li>
              <li>Calculate RFM metrics (Recency, Frequency, Monetary)</li>
              <li>Perform clustering analysis to identify customer segments</li>
              <li>Visualize customer segments</li>
              <li>Provide business recommendations for each segment</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>Exercise 3: Predictive Modeling</h3>
            <p>Build a machine learning model to predict house prices:</p>
            <ul>
              <li>Load and explore the housing dataset</li>
              <li>Handle missing values and outliers</li>
              <li>Engineer new features from existing ones</li>
              <li>Try different regression algorithms</li>
              <li>Evaluate model performance using appropriate metrics</li>
              <li>Interpret model results and feature importance</li>
            </ul>
          </div>
        </section>

        {/* Resources */}
        <section className="py-topic-section">
          <h2>📚 Additional Resources</h2>
          
          <h3>Essential Libraries Documentation</h3>
          <ul>
            <li><a href="https://numpy.org/doc/" target="_blank" rel="noopener noreferrer">NumPy Documentation</a></li>
            <li><a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener noreferrer">Pandas Documentation</a></li>
            <li><a href="https://matplotlib.org/stable/" target="_blank" rel="noopener noreferrer">Matplotlib Documentation</a></li>
            <li><a href="https://seaborn.pydata.org/" target="_blank" rel="noopener noreferrer">Seaborn Documentation</a></li>
            <li><a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener noreferrer">Scikit-learn Documentation</a></li>
          </ul>

          <h3>Learning Platforms</h3>
          <ul>
            <li><strong>Kaggle Learn:</strong> Free micro-courses on data science topics</li>
            <li><strong>Coursera:</strong> Data Science specialization courses</li>
            <li><strong>edX:</strong> MIT and Harvard data science courses</li>
            <li><strong>DataCamp:</strong> Interactive data science learning</li>
          </ul>

          <h3>Practice Datasets</h3>
          <ul>
            <li><strong>Kaggle Datasets:</strong> Thousands of real-world datasets</li>
            <li><strong>UCI ML Repository:</strong> Classic machine learning datasets</li>
            <li><strong>Seaborn Built-in Datasets:</strong> Tips, iris, titanic, etc.</li>
            <li><strong>Government Open Data:</strong> Census, economic, and social data</li>
          </ul>

          <h3>Books and References</h3>
          <ul>
            <li>"Python for Data Analysis" by Wes McKinney</li>
            <li>"Hands-On Machine Learning" by Aurélien Géron</li>
            <li>"The Elements of Statistical Learning" (free online)</li>
            <li>"Introduction to Statistical Learning" (free online)</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default DataScienceBasics;