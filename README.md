# IncomeifyApp-CH2-PS161 (Machine Learning)
This branch contains the following contents from the Machine Learning team:
1. Dataset: [Job Salary Indonesia](https://www.kaggle.com/datasets/canggih/jog-description-and-salary-in-indonesia?select=train.csv)
   
2. Data Preprocessing
    - Delete unnecesary columns, duplicate columns, and null columns
    - Remove outlier
    - Label encoding
    - Normalized dataset
    
3. Build a model
      - **Model Summary**\
         Model: "sequential"
         | Layer (type) | Output Shape | Param # |
         | ----------- | ----------- | ----------- |
         | dense (Dense) | (None, 128) | 768 |
         | dense_1 (Dense) | (None, 64) | 8256 |
         | dropout (Dropout) | (None, 64) | 0 |
         | dense_2 (Dense) | (None, 32) | 2080 |
         | dropout_1 (Dropout) | (None, 32) | 0 |
         | dense_3 (Dense) | (None, 10) | 330 |
         | dropout_2 (Dropout) | (None, 10) | 0 |
         | dense_4 (Dense) | (None, 1) | 11 |
        
        Total params: 11445 (44.71 KB)\
        Trainable params: 11445 (44.71 KB)\
        Non-trainable params: 0 (0.00 Byte)
   
5. Train Dataset
6. Testing a model
