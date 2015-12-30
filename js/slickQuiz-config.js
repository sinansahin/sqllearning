// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Hadi Öğrendiklerini Pekiştirelim",
        "main":    "<p>......</p>",
        "results": "çıktı yazısı",
        "level5":  "Tekrar Etmelisin",
        "level4":  "Çalışmalısın",
        "level3":  "Orta",
        "level2":  "Başarılı",
        "level1":  "Gayet Başarılı" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Aşağıdakilerden hangisinde yapı eksiği vardır?",
            "a": [
                {"option": "Select [alanlar] From [tablo adı]",      "correct": false},
                {"option": "Update [tablo adı] [yeni bilgiler] Where [şartlar]",     "correct": true},
                {"option": "Delete From [tablo adı] Where [şartlar]",      "correct": false},
                {"option": "Insert Into [tablo adı](alan adları) Values(veriler)",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Harika!</span> Update [tablo adı] Set [yeni bilgiler] Where [şartlar]</p>",
            "incorrect": "<p><span>Maalesef.</span> Update komutuna çalışmalısın!</p>" // no comma here
        },
        { // Question 2
            "q": "Aşağıdakilerden hangisi tüm tablonun verilerini çeker?",
            "a": [
                {"option": "Select * From Personel Where id=5",    "correct": false},
                {"option": "Select * From Personel",     "correct": true},
                {"option": "Select * From Personel Where adi like 'Ali'",      "correct": false},
                {"option": "Select * From Personel Where adi like 'A%'",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Harika!</span>Select * From Personel</p>",
            "incorrect": "<p><span>Maalesef.</span> Select komutuna çalışmalısın!</p>" // no comma here
        },
        { // Question 3
            "q": "Aşağıdakilerden hangisi adında 'A' geçen kayıtları siler?",
            "a": [
                {"option": "Delete From Personel adi like 'A'",        "correct": false},
                {"option": "Delete From Personel Where adi=A",           "correct": false},
                {"option": "Delete From Personel Where adi like 'A%'",  "correct": true},
                {"option": "Delete From Personel Where adi>='A'",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Harika!</span> Delete From Personel Where adi like 'A%'</p>",
            "incorrect": "<p><span>Maalesef.</span> Delete komutuna çalışmalısın!</p>" // no comma here
        },
        { // Question 4
            "q": "'Delete From Personel' komutu tüm Personel tablosunu siler?",
            "a": [
                {"option": "Evet",    "correct": true},
                {"option": "Hayır",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Harika!</span> </p>",
            "incorrect": "<p><span>Maalesef!</span> Delete komutuna çalışmalısın!</p>" // no comma here
        },
        { // Question 5
            "q": "Aşağıdakilerden hangileri yapı yazım yanlışlığı yoktur?",
            "a": [
                {"option": "Select [alanlar] From [tablo adı]",   "correct": true},
                {"option": "Update [tablo adı] Set [yeni bilgiler] Where [şartlar]",          "correct": true},
                {"option": "Delete From [tablo adı] Where [şartlar]",  "correct": true},
                {"option": "Insert [tablo adı] Values(veriler)",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Harika!</span> Insert Into [tablo adı](alan adları) Values(veriler)</p>",
            "incorrect": "<p><span>Maalesef.</span> Insert komutuna çalışmalısın!</p>" // no comma here
        } // no comma here
    ]
};