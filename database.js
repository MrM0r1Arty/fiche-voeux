const usersDatabase = [
  {
    matricule: "39305208",
    nom_fr: "KADI",
    prenom_fr: "YASMINE",
    nom_ar: "كادي",
    prenom_ar: "ياسمين",
    lieu_naissance: "ورقلة",
    date_naissance: "02/06/2005",
    moyenne_bac: "11.44"
  },
  {
    matricule: "39327217",
    nom_fr: "YAGOUB",
    prenom_fr: "ANFAL",
    nom_ar: "يعقوب",
    prenom_ar: "أنفال",
    lieu_naissance: "مقارين",
    date_naissance: "22/02/2003",
    moyenne_bac: "9.76"
  },
  {
    matricule: "39540101",
    nom_fr: "YAKOUB",
    prenom_fr: "ROUMAISSA",
    nom_ar: "يعقوب",
    prenom_ar: "الرميصاء",
    lieu_naissance: "المنار",
    date_naissance: "28/10/2005",
    moyenne_bac: "11.1"
  },
  {
    matricule: "39311008",
    nom_fr: "AOUACHIR",
    prenom_fr: "NOUR DJIHANE",
    nom_ar: "عواشير",
    prenom_ar: "نور جيهان",
    lieu_naissance: "ورقلة",
    date_naissance: "08/11/2004",
    moyenne_bac: "12.28"
  },
  {
    matricule: "39530218",
    nom_fr: "ARAR",
    prenom_fr: "AMANI",
    nom_ar: "عرعار",
    prenom_ar: "أماني",
    lieu_naissance: "تبسبست",
    date_naissance: "10/11/2005",
    moyenne_bac: "10.21"
  },
  {
    matricule: "39537815",
    nom_fr: "BEELABIDI",
    prenom_fr: "YOUSRA",
    nom_ar: "بالعبيدي",
    prenom_ar: "يسرى",
    lieu_naissance: "تقرت",
    date_naissance: "26/03/2006",
    moyenne_bac: "12.26"
  },
  {
    matricule: "39305008",
    nom_fr: "BEGARIA",
    prenom_fr: "NOUR ELIMANE",
    nom_ar: "بقارية",
    prenom_ar: "نور الايمان",
    lieu_naissance: "ورقلة",
    date_naissance: "22/10/2004",
    moyenne_bac: "12.04"
  },
  {
    matricule: "39309908",
    nom_fr: "BENSACI",
    prenom_fr: "ROUANE",
    nom_ar: "بن ساسي",
    prenom_ar: "روان",
    lieu_naissance: "الرويسات",
    date_naissance: "22/01/2006",
    moyenne_bac: "10.26"
  },
  {
    matricule: "39061927",
    nom_fr: "BETTAHER",
    prenom_fr: "IMAN",
    nom_ar: "بالطاهر",
    prenom_ar: "إيمان",
    lieu_naissance: "نزلة",
    date_naissance: "28/08/1999",
    moyenne_bac: "10.05"
  },
  {
    matricule: "39317803",
    nom_fr: "BENINE",
    prenom_fr: "RIM",
    nom_ar: "بنين",
    prenom_ar: "ريم",
    lieu_naissance: "الوادى",
    date_naissance: "13/06/2005",
    moyenne_bac: "11.41"
  },
  {
    matricule: "39318809",
    nom_fr: "BENINE",
    prenom_fr: "OUADJDANE",
    nom_ar: "بنين",
    prenom_ar: "وجدان",
    lieu_naissance: "حاسي مسعود",
    date_naissance: "05/04/2005",
    moyenne_bac: "10.28"
  },
  {
    matricule: "39551116",
    nom_fr: "BOUHOREIRA",
    prenom_fr: "NADIR ALA ELDINE",
    nom_ar: "بوهريره",
    prenom_ar: "ندير علاء الدين",
    lieu_naissance: "بلدة عمر",
    date_naissance: "07/06/2003",
    moyenne_bac: "10.29"
  },
  {
    matricule: "9031643",
    nom_fr: "BOUMIDOUNA",
    prenom_fr: "Fouzia",
    nom_ar: "بوميدونة",
    prenom_ar: "فوزية",
    lieu_naissance: "nan",
    date_naissance: "13/02/1990",
    moyenne_bac: "10.23"
  },
  {
    matricule: "39524119",
    nom_fr: "DAHDI",
    prenom_fr: "INAS",
    nom_ar: "دحدي",
    prenom_ar: "إيناس",
    lieu_naissance: "النزلة",
    date_naissance: "12/07/2004",
    moyenne_bac: "11.29"
  },
  {
    matricule: "39524410",
    nom_fr: "DEBBA",
    prenom_fr: "TASNIM",
    nom_ar: "دبه",
    prenom_ar: "تسنيم",
    lieu_naissance: "النزلة",
    date_naissance: "24/09/2005",
    moyenne_bac: "12.4"
  },
  {
    matricule: "39565812",
    nom_fr: "DENDOUGUI",
    prenom_fr: "ZAHIRA",
    nom_ar: "دندوقي",
    prenom_ar: "زهيرة",
    lieu_naissance: "تقرت",
    date_naissance: "23/04/2003",
    moyenne_bac: "10.67"
  },
  {
    matricule: "39537601",
    nom_fr: "MELLATI",
    prenom_fr: "NAILA",
    nom_ar: "ملاطي",
    prenom_ar: "نايلة",
    lieu_naissance: "الجلفة",
    date_naissance: "06/08/2005",
    moyenne_bac: "10.1"
  },
  {
    matricule: "39298819",
    nom_fr: "MEHIRI",
    prenom_fr: "ROUFAIDA",
    nom_ar: "مهيري",
    prenom_ar: "روفيدة",
    lieu_naissance: "ورقلة",
    date_naissance: "20/04/2005",
    moyenne_bac: "10.71"
  },
  {
    matricule: "39318616",
    nom_fr: "LEFKIH",
    prenom_fr: "MILAD WISSAL",
    nom_ar: "لفقيه",
    prenom_ar: "ميلاد وصال",
    lieu_naissance: "حاسي مسعود",
    date_naissance: "26/07/2004",
    moyenne_bac: "11.02"
  },
  {
    matricule: "39557205",
    nom_fr: "SELLAMI",
    prenom_fr: "SOUAD",
    nom_ar: "سلامي",
    prenom_ar: "سعاد",
    lieu_naissance: "عين الصحراء",
    date_naissance: "26/11/2003",
    moyenne_bac: "10.71"
  },
  {
    matricule: "39613902",
    nom_fr: "FETITI",
    prenom_fr: "SADJIDA",
    nom_ar: "فتيتي",
    prenom_ar: "ساجدة",
    lieu_naissance: "جامعة",
    date_naissance: "09/11/2006",
    moyenne_bac: "11.57"
  },
  {
    matricule: "37013601",
    nom_fr: "ARBI LADMI",
    prenom_fr: "MANAL",
    nom_ar: "عربي لادمي",
    prenom_ar: "منال",
    lieu_naissance: "اولف",
    date_naissance: "01/01/2005",
    moyenne_bac: "12.39"
  },
  {
    matricule: "39340409",
    nom_fr: "ACHAB",
    prenom_fr: "ELKHANSA",
    nom_ar: "عشاب",
    prenom_ar: "الخنساء",
    lieu_naissance: "حاسي مسعود",
    date_naissance: "06/03/2005",
    moyenne_bac: "12.69"
  },
  {
    matricule: "39327208",
    nom_fr: "FERCHA",
    prenom_fr: "NOUR EL ISLEM",
    nom_ar: "فرشة",
    prenom_ar: "نور الاسلام",
    lieu_naissance: "باتنة",
    date_naissance: "28/01/2007",
    moyenne_bac: "10.12"
  },
  {
    matricule: "39563412",
    nom_fr: "SOUALAH",
    prenom_fr: "SAIDA",
    nom_ar: "صوالح",
    prenom_ar: "سعيدة",
    lieu_naissance: "الوادي",
    date_naissance: "29/05/2006",
    moyenne_bac: "11.02"
  },
  {
    matricule: "39340314",
    nom_fr: "KAROUI",
    prenom_fr: "ISLEM",
    nom_ar: "قروي",
    prenom_ar: "إسلام",
    lieu_naissance: "حاسي مسعود",
    date_naissance: "01/03/2004",
    moyenne_bac: "10.53"
  },
  {
    matricule: "39614302",
    nom_fr: "GUENNOUNI",
    prenom_fr: "FATIMA",
    nom_ar: "قنوني",
    prenom_ar: "فطيمة",
    lieu_naissance: "جامعة",
    date_naissance: "13/12/2006",
    moyenne_bac: "11.01"
  },
  {
    matricule: "39336111",
    nom_fr: "BEN DJDDIA",
    prenom_fr: "RIMA",
    nom_ar: "بن جدية",
    prenom_ar: "ريمة",
    lieu_naissance: "ورقلة",
    date_naissance: "13/10/2005",
    moyenne_bac: "12.18"
  },
  {
    matricule: "39557303",
    nom_fr: "GUELLAB",
    prenom_fr: "SALIMA",
    nom_ar: "قلاب",
    prenom_ar: "سليمة",
    lieu_naissance: "تقرت",
    date_naissance: "30/06/2004",
    moyenne_bac: "12.43"
  },
  {
    matricule: "39562518",
    nom_fr: "MADANI",
    prenom_fr: "ACHOUAK",
    nom_ar: "مداني",
    prenom_ar: "أشواق",
    lieu_naissance: "تبسبست",
    date_naissance: "25/09/2006",
    moyenne_bac: "11.91"
  },
  {
    matricule: "39317212",
    nom_fr: "BENTEKHICI",
    prenom_fr: "SALIMA",
    nom_ar: "بن تخيسي",
    prenom_ar: "سليمة",
    lieu_naissance: "سيدي بلعباس",
    date_naissance: "10/07/2005",
    moyenne_bac: "11.49"
  },
  {
    matricule: "39321409",
    nom_fr: "MEDDOUR",
    prenom_fr: "FATMA ZOHRA",
    nom_ar: "مدور",
    prenom_ar: "فاطمة الزهراء",
    lieu_naissance: "الرويسات",
    date_naissance: "24/04/2006",
    moyenne_bac: "11.57"
  },
  {
    matricule: "39327320",
    nom_fr: "BASSIMANE",
    prenom_fr: "HADIL",
    nom_ar: "باسيمان",
    prenom_ar: "هديل",
    lieu_naissance: "ورقلة",
    date_naissance: "04/04/2006",
    moyenne_bac: "11.45"
  },
  {
    matricule: "39327219",
    nom_fr: "ABANOU",
    prenom_fr: "HADGER",
    nom_ar: "ابانو",
    prenom_ar: "هاجر",
    lieu_naissance: "ورقلة",
    date_naissance: "16/02/2006",
    moyenne_bac: "10.13"
  },
  {
    matricule: "39562401",
    nom_fr: "REMOUNE",
    prenom_fr: "ALA ARRAHMANE",
    nom_ar: "رمون",
    prenom_ar: "آلاء الرحمان",
    lieu_naissance: "تبسبست",
    date_naissance: "12/04/2006",
    moyenne_bac: "12.81"
  },
  {
    matricule: "39321116",
    nom_fr: "BOUSSAID",
    prenom_fr: "SIRINE",
    nom_ar: "بوسعيد",
    prenom_ar: "سرين",
    lieu_naissance: "ورقلة",
    date_naissance: "20/06/2007",
    moyenne_bac: "12.18"
  },
  {
    matricule: "31192401",
    nom_fr: "BIGA",
    prenom_fr: "ALAA",
    nom_ar: "بيقه",
    prenom_ar: "الاء",
    lieu_naissance: "برج عمر إدريس",
    date_naissance: "02/09/2005",
    moyenne_bac: "12.69"
  },
  {
    matricule: "39573408",
    nom_fr: "BENALI",
    prenom_fr: "CHAIMA",
    nom_ar: "بن علي",
    prenom_ar: "شيماء",
    lieu_naissance: "تملاحت",
    date_naissance: "10/04/2006",
    moyenne_bac: "11.35"
  },
  {
    matricule: "39340811",
    nom_fr: "AZZI",
    prenom_fr: "ZINEB",
    nom_ar: "عزي",
    prenom_ar: "زينب",
    lieu_naissance: "حاسي مسعود",
    date_naissance: "05/07/2006",
    moyenne_bac: "11.32"
  },
  {
    matricule: "39326514",
    nom_fr: "LOUBAKI",
    prenom_fr: "CHOUROUK",
    nom_ar: "لوباقي",
    prenom_ar: "شروق",
    lieu_naissance: "ورقلة",
    date_naissance: "15/02/2007",
    moyenne_bac: "11.44"
  },
  {
    matricule: "39537413",
    nom_fr: "KHALFALLAH",
    prenom_fr: "MERIEM",
    nom_ar: "خلف الله",
    prenom_ar: "مريم",
    lieu_naissance: "تقرت",
    date_naissance: "17/01/2004",
    moyenne_bac: "10.53"
  },
  {
    matricule: "38432911",
    nom_fr: "TERCHI",
    prenom_fr: "SIHAM",
    nom_ar: "طرشي",
    prenom_ar: "سهام",
    lieu_naissance: "سيدي عمر",
    date_naissance: "04/01/2003",
    moyenne_bac: "10.28"
  },
  {
    matricule: "39340714",
    nom_fr: "KARA",
    prenom_fr: "ROUMAISSA",
    nom_ar: "قارة",
    prenom_ar: "رميسة",
    lieu_naissance: "حاسي مسعود",
    date_naissance: "07/04/2006",
    moyenne_bac: "10.97"
  },
  {
    matricule: "39614112",
    nom_fr: "BOUHAFS",
    prenom_fr: "SAFA",
    nom_ar: "بوحفص",
    prenom_ar: "صفاء",
    lieu_naissance: "جامعة",
    date_naissance: "10/01/2006",
    moyenne_bac: "10.32"
  },
  {
    matricule: "39331508",
    nom_fr: "MEKHLOUFI",
    prenom_fr: "OMELKHIR",
    nom_ar: "مخلوفي",
    prenom_ar: "أم الخير",
    lieu_naissance: "الرويسات",
    date_naissance: "05/12/2006",
    moyenne_bac: "13.17"
  },
  {
    matricule: "39568705",
    nom_fr: "DJEBALI",
    prenom_fr: "ICHRAK",
    nom_ar: "جبالي",
    prenom_ar: "إشراق",
    lieu_naissance: "تبسبست",
    date_naissance: "16/04/2006",
    moyenne_bac: "12.3"
  },
  {
    matricule: "39326306",
    nom_fr: "GUENNOUNE",
    prenom_fr: "HANNADALAL",
    nom_ar: "قنون",
    prenom_ar: "حنة دلال",
    lieu_naissance: "ورقلة",
    date_naissance: "03/01/2007",
    moyenne_bac: "11.21"
  },
  {
    matricule: "39313207",
    nom_fr: "BELALMI",
    prenom_fr: "ZOUBIDA",
    nom_ar: "بلعلمي",
    prenom_ar: "زبيدة",
    lieu_naissance: "ورقلة",
    date_naissance: "11/11/2006",
    moyenne_bac: "13.79"
  },
  {
    matricule: "39576416",
    nom_fr: "ALLAOUA",
    prenom_fr: "SABRA",
    nom_ar: "علاوة",
    prenom_ar: "صابره",
    lieu_naissance: "سيدي سليمان",
    date_naissance: "26/12/2005",
    moyenne_bac: "13.07"
  },
  {
    matricule: "39321002",
    nom_fr: "RAHMANI",
    prenom_fr: "KHIRA",
    nom_ar: "رحماني",
    prenom_ar: "خيرة",
    lieu_naissance: "ورقلة",
    date_naissance: "19/04/2006",
    moyenne_bac: "11.45"
  },
  {
    matricule: "39583613",
    nom_fr: "BOUKHALLAT",
    prenom_fr: "DALIA IKRAM",
    nom_ar: "بوخلط",
    prenom_ar: "داليا إكرام",
    lieu_naissance: "بلدة عمر",
    date_naissance: "04/02/2006",
    moyenne_bac: "12.64"
  },
  {
    matricule: "39325914",
    nom_fr: "BENNAI",
    prenom_fr: "ANFAL",
    nom_ar: "بناي",
    prenom_ar: "أنفال",
    lieu_naissance: "ورقلة",
    date_naissance: "18/11/2006",
    moyenne_bac: "12.04"
  },
  {
    matricule: "39318004",
    nom_fr: "BOUCHRIT",
    prenom_fr: "WISSAL",
    nom_ar: "بوشريط",
    prenom_ar: "وصال",
    lieu_naissance: "ورقلة",
    date_naissance: "19/05/2006",
    moyenne_bac: "10.68"
  },
  {
    matricule: "39576217",
    nom_fr: "BENTACHA",
    prenom_fr: "KHADIDJA",
    nom_ar: "بن طشة",
    prenom_ar: "خديجة",
    lieu_naissance: "Sidi Slimane - Touggourt",
    date_naissance: "02/04/2006",
    moyenne_bac: "13.21"
  },
  {
    matricule: "39320812",
    nom_fr: "MERZOUG",
    prenom_fr: "AYA KHADRA",
    nom_ar: "مرزوق",
    prenom_ar: "اية خضرة",
    lieu_naissance: "ورقلة",
    date_naissance: "07/08/2005",
    moyenne_bac: "11.49"
  },
  {
    matricule: "39557214",
    nom_fr: "NAITI",
    prenom_fr: "SELSABIL",
    nom_ar: "نعيطي",
    prenom_ar: "سلسبيل",
    lieu_naissance: "النزلة",
    date_naissance: "14/01/2005",
    moyenne_bac: "12.96"
  },
  {
    matricule: "39570105",
    nom_fr: "KHADARI",
    prenom_fr: "MAROUA",
    nom_ar: "خضاري",
    prenom_ar: "مروة",
    lieu_naissance: "تقرت",
    date_naissance: "01/03/2005",
    moyenne_bac: "11.00"
  },
  {
    matricule: "39326201",
    nom_fr: "HERNOUF",
    prenom_fr: "IMANE",
    nom_ar: "هرنوف",
    prenom_ar: "ايمان",
    lieu_naissance: "ورقلة",
    date_naissance: "06/07/2005",
    moyenne_bac: "11.03"
  },
  {
    matricule: "39557112",
    nom_fr: "TEDJINI",
    prenom_fr: "RIM",
    nom_ar: "تجيني",
    prenom_ar: "ريم",
    lieu_naissance: "النزلة",
    date_naissance: "09/05/2006",
    moyenne_bac: "10.96"
  },
  {
    matricule: "39327301",
    nom_fr: "HADJADJ",
    prenom_fr: "HADJER",
    nom_ar: "حجاج",
    prenom_ar: "هاجر",
    lieu_naissance: "ورقلة",
    date_naissance: "13/03/2007",
    moyenne_bac: "12.77"
  },
  {
    matricule: "39573317",
    nom_fr: "BELAID",
    prenom_fr: "SELSSABIL",
    nom_ar: "بالعيد",
    prenom_ar: "سلسبيل",
    lieu_naissance: "تماسين",
    date_naissance: "09/10/2006",
    moyenne_bac: "11.2"
  },
  {
    matricule: "39586215",
    nom_fr: "KADRI",
    prenom_fr: "YOUMNA",
    nom_ar: "قادري",
    prenom_ar: "يمنى",
    lieu_naissance: "تقرت",
    date_naissance: "13/12/2006",
    moyenne_bac: "11.29"
  },
  {
    matricule: "39317302",
    nom_fr: "KHOUALED",
    prenom_fr: "CHOUROUK",
    nom_ar: "خوالد",
    prenom_ar: "شروق",
    lieu_naissance: "ورقلة",
    date_naissance: "30/10/2004",
    moyenne_bac: "12.00"
  },
  {
    matricule: "39568312",
    nom_fr: "BENSAOUD",
    prenom_fr: "AYA",
    nom_ar: "بن سعود",
    prenom_ar: "آية",
    lieu_naissance: "تقرت",
    date_naissance: "24/11/2005",
    moyenne_bac: "10.29"
  },
  {
    matricule: "39558111",
    nom_fr: "CHIBA",
    prenom_fr: "MAROUA SALSABIL",
    nom_ar: "شيبة",
    prenom_ar: "مروة سلسبيل",
    lieu_naissance: "النزلة",
    date_naissance: "29/01/2007",
    moyenne_bac: "12.75"
  },
  {
    matricule: "39583607",
    nom_fr: "CHACHA",
    prenom_fr: "HAFSA",
    nom_ar: "شاشه",
    prenom_ar: "حفصه",
    lieu_naissance: "بلدة عمر",
    date_naissance: "17/11/2005",
    moyenne_bac: "11.59"
  },
  {
    matricule: "39568514",
    nom_fr: "SADAOUI",
    prenom_fr: "AMINA",
    nom_ar: "سعداوي",
    prenom_ar: "أمينة",
    lieu_naissance: "تقرت",
    date_naissance: "14/04/2005",
    moyenne_bac: "11.43"
  },
  {
    matricule: "39326220",
    nom_fr: "BASMAIL",
    prenom_fr: "DJENT ELFERDOUS",
    nom_ar: "باسماعيل",
    prenom_ar: "جنة الفردوس",
    lieu_naissance: "ورقلة",
    date_naissance: "07/09/2005",
    moyenne_bac: "10.11"
  },
  {
    matricule: "39336901",
    nom_fr: "NAHOUI",
    prenom_fr: "NASRINE",
    nom_ar: "النحوي",
    prenom_ar: "نسرين",
    lieu_naissance: "ورقلة",
    date_naissance: "22/06/2006",
    moyenne_bac: "11.31"
  },
  {
    matricule: "39562408",
    nom_fr: "DJEDEI",
    prenom_fr: "AYA",
    nom_ar: "جديع",
    prenom_ar: "آية",
    lieu_naissance: "تقرت",
    date_naissance: "08/02/2006",
    moyenne_bac: "10.22"
  },
  {
    matricule: "39556915",
    nom_fr: "BEN CHENNA",
    prenom_fr: "DOUA",
    nom_ar: "بن شنة",
    prenom_ar: "دعاء",
    lieu_naissance: "النزلة",
    date_naissance: "15/08/2006",
    moyenne_bac: "10.64"
  },
  {
    matricule: "39576818",
    nom_fr: "KHEMICI",
    prenom_fr: "NOURHANE",
    nom_ar: "خميسي",
    prenom_ar: "نورهان",
    lieu_naissance: "القصور",
    date_naissance: "15/09/2006",
    moyenne_bac: "11.77"
  },
  {
    matricule: "39581011",
    nom_fr: "DOKMA",
    prenom_fr: "HEBA",
    nom_ar: "دكمة",
    prenom_ar: "هبة",
    lieu_naissance: "ابن ناصر",
    date_naissance: "27/10/2004",
    moyenne_bac: "10.97"
  },
  {
    matricule: "39573316",
    nom_fr: "SALMI",
    prenom_fr: "SALSABIL",
    nom_ar: "سالمي",
    prenom_ar: "سلسبيل",
    lieu_naissance: "قوق",
    date_naissance: "26/07/2006",
    moyenne_bac: "12.2"
  },
  {
    matricule: "39326001",
    nom_fr: "HAFFAF",
    prenom_fr: "ISRA",
    nom_ar: "حفاف",
    prenom_ar: "إسراء",
    lieu_naissance: "ورقلة",
    date_naissance: "14/06/2006",
    moyenne_bac: "12.92"
  },
  {
    matricule: "39583519",
    nom_fr: "GHETTAS",
    prenom_fr: "BASMALA NOUR ELYAKINE",
    nom_ar: "غطاس",
    prenom_ar: "بسمله نور اليقين",
    lieu_naissance: "بلدة عمر",
    date_naissance: "24/09/2006",
    moyenne_bac: "11.86"
  },
  {
    matricule: "39312909",
    nom_fr: "DADENE",
    prenom_fr: "INAM",
    nom_ar: "دادن",
    prenom_ar: "إنعام",
    lieu_naissance: "ورقلة",
    date_naissance: "29/05/2006",
    moyenne_bac: "12.19"
  },
  {
    matricule: "39327310",
    nom_fr: "KADRI",
    prenom_fr: "HIBAT ERRAHMANE",
    nom_ar: "قادري",
    prenom_ar: "هبة الرحمان",
    lieu_naissance: "ورقلة",
    date_naissance: "18/06/2006",
    moyenne_bac: "12.1"
  },
  {
    matricule: "39573210",
    nom_fr: "KHERFI",
    prenom_fr: "RADHIA",
    nom_ar: "خرفي",
    prenom_ar: "راضية",
    lieu_naissance: "قوق",
    date_naissance: "11/06/2006",
    moyenne_bac: "11.04"
  },
  {
    matricule: "39562607",
    nom_fr: "ZIDI",
    prenom_fr: "AMIRA",
    nom_ar: "زيدي",
    prenom_ar: "أميرة",
    lieu_naissance: "تبسبست",
    date_naissance: "06/12/2005",
    moyenne_bac: "11.24"
  },
  {
    matricule: "39573516",
    nom_fr: "BADIDJA",
    prenom_fr: "GHEZLANE",
    nom_ar: "باديجة",
    prenom_ar: "غزلان",
    lieu_naissance: "قوق",
    date_naissance: "19/11/2004",
    moyenne_bac: "10.73"
  },
  {
    matricule: "39570212",
    nom_fr: "KOUIDRI",
    prenom_fr: "MANAL",
    nom_ar: "قويدري",
    prenom_ar: "منال",
    lieu_naissance: "تقرت",
    date_naissance: "14/06/2005",
    moyenne_bac: "10.12"
  },
  {
    matricule: "39340716",
    nom_fr: "MAHREZ",
    prenom_fr: "ROUA",
    nom_ar: "محرز",
    prenom_ar: "روا",
    lieu_naissance: "المغير",
    date_naissance: "23/06/2006",
    moyenne_bac: "11.67"
  },
  {
    matricule: "39579409",
    nom_fr: "GASMI",
    prenom_fr: "ASMA",
    nom_ar: "قاسمي",
    prenom_ar: "اسماء",
    lieu_naissance: "الطيبات",
    date_naissance: "01/03/2004",
    moyenne_bac: "10.42"
  },
  {
    matricule: "39321007",
    nom_fr: "DOBBI",
    prenom_fr: "RADIA",
    nom_ar: "دبي",
    prenom_ar: "راضية",
    lieu_naissance: "ورقلة",
    date_naissance: "16/05/2006",
    moyenne_bac: "11.76"
  },
  {
    matricule: "39326505",
    nom_fr: "BOUIDIA",
    prenom_fr: "SAMAH",
    nom_ar: "بويدية",
    prenom_ar: "سماح",
    lieu_naissance: "ورقلة",
    date_naissance: "05/12/2004",
    moyenne_bac: "10.24"
  },
  {
    matricule: "39308817",
    nom_fr: "MEFATIH",
    prenom_fr: "TASNIM",
    nom_ar: "مفاتيح",
    prenom_ar: "تسنيم",
    lieu_naissance: "ورقلة",
    date_naissance: "04/09/2006",
    moyenne_bac: "11.64"
  },
  {
    matricule: "39562703",
    nom_fr: "ACILA",
    prenom_fr: "IKHLAS",
    nom_ar: "عسيله",
    prenom_ar: "إخلاص",
    lieu_naissance: "تبسبست",
    date_naissance: "06/01/2006",
    moyenne_bac: "10.03"
  },
  {
    matricule: "39583903",
    nom_fr: "BOUHNIK",
    prenom_fr: "KAOUTAR",
    nom_ar: "بوحنيك",
    prenom_ar: "كوثر",
    lieu_naissance: "بلدة عمر",
    date_naissance: "16/11/2006",
    moyenne_bac: "10.72"
  },
  {
    matricule: "39576713",
    nom_fr: "YAGOUB",
    prenom_fr: "MALAK",
    nom_ar: "يعقوب",
    prenom_ar: "ملاك",
    lieu_naissance: "المقارين",
    date_naissance: "07/04/2005",
    moyenne_bac: "11.95"
  },
  {
    matricule: "39563608",
    nom_fr: "DAHMANE",
    prenom_fr: "CHEIMA",
    nom_ar: "دحمان",
    prenom_ar: "شيماء",
    lieu_naissance: "Constantine",
    date_naissance: "29/07/2006",
    moyenne_bac: "11.6"
  },
  {
    matricule: "39327214",
    nom_fr: "GUENNOUN",
    prenom_fr: "NOUR ELHOUDA",
    nom_ar: "قنون",
    prenom_ar: "نور الهدى",
    lieu_naissance: "ورقلة",
    date_naissance: "26/09/2007",
    moyenne_bac: "12.33"
  },
  {
    matricule: "39563419",
    nom_fr: "KERBOUA",
    prenom_fr: "SALIMA",
    nom_ar: "كربوع",
    prenom_ar: "سليمة",
    lieu_naissance: "تبسبست",
    date_naissance: "10/03/2006",
    moyenne_bac: "11.11"
  },
  {
    matricule: "39576601",
    nom_fr: "BOURIALA",
    prenom_fr: "FETHENNOUR",
    nom_ar: "بورياله",
    prenom_ar: "فتح النور",
    lieu_naissance: "الهرهيرة",
    date_naissance: "18/02/2007",
    moyenne_bac: "10.7"
  },
  {
    matricule: "39580204",
    nom_fr: "SADOKI",
    prenom_fr: "CHAIMA",
    nom_ar: "صادوقي",
    prenom_ar: "شيماء",
    lieu_naissance: "تقرت",
    date_naissance: "22/03/2007",
    moyenne_bac: "10.1"
  },
  {
    matricule: "39583818",
    nom_fr: "BENNAMIA",
    prenom_fr: "FERIAL",
    nom_ar: "بن نعميه",
    prenom_ar: "فريال",
    lieu_naissance: "بلدة عمر",
    date_naissance: "10/04/2005",
    moyenne_bac: "10.97"
  },
  {
    matricule: "39573309",
    nom_fr: "BOUBEKRI",
    prenom_fr: "ZINEB",
    nom_ar: "بوبكري",
    prenom_ar: "زينب",
    lieu_naissance: "البحور",
    date_naissance: "12/10/2006",
    moyenne_bac: "11.27"
  },
  {
    matricule: "39317120",
    nom_fr: "MEDJAT",
    prenom_fr: "ZINEB",
    nom_ar: "مجات",
    prenom_ar: "زينب",
    lieu_naissance: "ورقلة",
    date_naissance: "07/12/2005",
    moyenne_bac: "12.86"
  },
  {
    matricule: "39573303",
    nom_fr: "GHAIA",
    prenom_fr: "RIM",
    nom_ar: "غايه",
    prenom_ar: "ريم",
    lieu_naissance: "البحور",
    date_naissance: "01/09/2006",
    moyenne_bac: "12.77"
  },
  {
    matricule: "39327313",
    nom_fr: "SEDRATI",
    prenom_fr: "HIBETERRAHMANE",
    nom_ar: "سدراتي",
    prenom_ar: "هبة الرحمان",
    lieu_naissance: "ورقلة",
    date_naissance: "20/01/2007",
    moyenne_bac: "11.75"
  },
  {
    matricule: "39321014",
    nom_fr: "BENFERDJALLAH",
    prenom_fr: "RAHMA",
    nom_ar: "بن فرج الله",
    prenom_ar: "رحمة",
    lieu_naissance: "ورقلة",
    date_naissance: "14/09/2005",
    moyenne_bac: "10.56"
  },
  {
    matricule: "39573016",
    nom_fr: "KADIR",
    prenom_fr: "AYA",
    nom_ar: "قادير",
    prenom_ar: "اية",
    lieu_naissance: "تملاحت",
    date_naissance: "05/03/2005",
    moyenne_bac: "11.85"
  },
  {
    matricule: "39568315",
    nom_fr: "BAYAT",
    prenom_fr: "AYAT ERRAHMANE",
    nom_ar: "بيات",
    prenom_ar: "آية الرحمان",
    lieu_naissance: "تقرت",
    date_naissance: "12/01/2006",
    moyenne_bac: "11.79"
  },
  {
    matricule: "39576306",
    nom_fr: "BERRACHED",
    prenom_fr: "RADHIA",
    nom_ar: "براشد",
    prenom_ar: "راضية",
    lieu_naissance: "توقرت",
    date_naissance: "05/09/2005",
    moyenne_bac: "10.2"
  },
  {
    matricule: "39321506",
    nom_fr: "MEKKAOUI",
    prenom_fr: "MARIA",
    nom_ar: "مكاوي",
    prenom_ar: "مارية",
    lieu_naissance: "ورقلة",
    date_naissance: "29/11/2006",
    moyenne_bac: "10.89"
  },
  {
    matricule: "39316819",
    nom_fr: "MAHIDDINE",
    prenom_fr: "TASSNIME ELDJANA",
    nom_ar: "محي الدين",
    prenom_ar: "تسنيم الجنة",
    lieu_naissance: "ورقلة",
    date_naissance: "03/09/2006",
    moyenne_bac: "11.81"
  },
  {
    matricule: "39326014",
    nom_fr: "BAROUD",
    prenom_fr: "IBTISSEM",
    nom_ar: "بارود",
    prenom_ar: "ابتسام",
    lieu_naissance: "وهران",
    date_naissance: "20/08/2007",
    moyenne_bac: "11.61"
  },
  {
    matricule: "39325815",
    nom_fr: "DJEDDI",
    prenom_fr: "ARIDJ",
    nom_ar: "جدي",
    prenom_ar: "أريج",
    lieu_naissance: "ورقلة",
    date_naissance: "29/11/2006",
    moyenne_bac: "12.52"
  },
  {
    matricule: "39576604",
    nom_fr: "KINED",
    prenom_fr: "FERDAOUS",
    nom_ar: "كيند",
    prenom_ar: "فردوس",
    lieu_naissance: "سيدي سليمان",
    date_naissance: "21/06/2005",
    moyenne_bac: "11.2"
  },
  {
    matricule: "39570220",
    nom_fr: "BENHAMMIA",
    prenom_fr: "NARDJES",
    nom_ar: "بن حمية",
    prenom_ar: "نرجس",
    lieu_naissance: "النزلة",
    date_naissance: "22/07/2006",
    moyenne_bac: "13.15"
  },
  {
    matricule: "39573307",
    nom_fr: "GHOULIA",
    prenom_fr: "ZINEB",
    nom_ar: "غوليه",
    prenom_ar: "زينب",
    lieu_naissance: "سيدي عامر",
    date_naissance: "09/08/2006",
    moyenne_bac: "12.34"
  },
  {
    matricule: "39583704",
    nom_fr: "BENNAMIA",
    prenom_fr: "SARA",
    nom_ar: "بن نعميه",
    prenom_ar: "سارة",
    lieu_naissance: "بلدة عمر",
    date_naissance: "29/11/2006",
    moyenne_bac: "11.33"
  },
  {
    matricule: "39557111",
    nom_fr: "MAHCHA",
    prenom_fr: "RIHAB",
    nom_ar: "محشة",
    prenom_ar: "ريحاب",
    lieu_naissance: "ع الصحرا ء",
    date_naissance: "04/01/2005",
    moyenne_bac: "12.46"
  },
  {
    matricule: "39336212",
    nom_fr: "DACHI",
    prenom_fr: "SOUNDOUS",
    nom_ar: "داشي",
    prenom_ar: "سندس",
    lieu_naissance: "سيدي خويلد",
    date_naissance: "15/10/2006",
    moyenne_bac: "12.32"
  },
  {
    matricule: "39336104",
    nom_fr: "MERABTI",
    prenom_fr: "REZKA",
    nom_ar: "مرابطي",
    prenom_ar: "رزقة",
    lieu_naissance: "سيدي خويلد",
    date_naissance: "02/01/2005",
    moyenne_bac: "10.32"
  },
  {
    matricule: "39576913",
    nom_fr: "BELAID",
    prenom_fr: "WISSAL",
    nom_ar: "بالعيد",
    prenom_ar: "وصال",
    lieu_naissance: "الهرهيرة",
    date_naissance: "03/08/2006",
    moyenne_bac: "11.78"
  },
  {
    matricule: "39313105",
    nom_fr: "GUEOUDI",
    prenom_fr: "DOUNIA",
    nom_ar: "قاودي",
    prenom_ar: "دنيا",
    lieu_naissance: "سطيف",
    date_naissance: "01/06/2005",
    moyenne_bac: "12.38"
  },
  {
    matricule: "39368415",
    nom_fr: "DAOUI",
    prenom_fr: "ABDERRAHMANE",
    nom_ar: "الداوي",
    prenom_ar: "عبدالرحمان",
    lieu_naissance: "الرويسات",
    date_naissance: "10/07/2002",
    moyenne_bac: "10.3"
  },
  {
    matricule: "39321414",
    nom_fr: "LEHELLA",
    prenom_fr: "KAOUTHER",
    nom_ar: "الهلة",
    prenom_ar: "كوثر",
    lieu_naissance: "ورقلة",
    date_naissance: "26/11/2006",
    moyenne_bac: "12.23"
  },
  {
    matricule: "39341507",
    nom_fr: "MADJI",
    prenom_fr: "MAROUA",
    nom_ar: "ماجي",
    prenom_ar: "مروة",
    lieu_naissance: "بجاية",
    date_naissance: "08/07/2006",
    moyenne_bac: "10.43"
  },
  {
    matricule: "39346104",
    nom_fr: "DEBLAOUI",
    prenom_fr: "ZINEB",
    nom_ar: "دبلاوي",
    prenom_ar: "زينب",
    lieu_naissance: "افران",
    date_naissance: "18/03/2006",
    moyenne_bac: "11.48"
  },
  {
    matricule: "39309020",
    nom_fr: "RABIA",
    prenom_fr: "ZINEB",
    nom_ar: "ربيع",
    prenom_ar: "زينب",
    lieu_naissance: "ورقلة",
    date_naissance: "24/01/2007",
    moyenne_bac: "12.75"
  },
  {
    matricule: "39580119",
    nom_fr: "DOKMA",
    prenom_fr: "CHIFA",
    nom_ar: "دكمه",
    prenom_ar: "شيفاء",
    lieu_naissance: "الطيبات",
    date_naissance: "12/09/2005",
    moyenne_bac: "11.8"
  },
  {
    matricule: "39316807",
    nom_fr: "HAMOUDA",
    prenom_fr: "AYAT ERRAHMAN",
    nom_ar: "حمودة",
    prenom_ar: "اية الرحمان",
    lieu_naissance: "ورقلة",
    date_naissance: "17/09/2005",
    moyenne_bac: "10.23"
  },
  {
    matricule: "39313306",
    nom_fr: "HEDROUG",
    prenom_fr: "SOUNDOUS",
    nom_ar: "هدروق",
    prenom_ar: "سندس",
    lieu_naissance: "ورقلة",
    date_naissance: "31/03/2006",
    moyenne_bac: "11.63"
  },
  {
    matricule: "39344916",
    nom_fr: "ANANE",
    prenom_fr: "OUISSAME",
    nom_ar: "عنان",
    prenom_ar: "وسام",
    lieu_naissance: "أنقوسة",
    date_naissance: "01/01/2007",
    moyenne_bac: "12.06"
  },
  {
    matricule: "39599320",
    nom_fr: "SOLTANI",
    prenom_fr: "RANIA",
    nom_ar: "سلطاني",
    prenom_ar: "رانيا",
    lieu_naissance: "سيدي مهدي",
    date_naissance: "16/09/2003",
    moyenne_bac: "10.62"
  },
  {
    matricule: "39573818",
    nom_fr: "BAKKA",
    prenom_fr: "HIBAT ERRAHMANE",
    nom_ar: "بكه",
    prenom_ar: "هبه الرحمان",
    lieu_naissance: "تماسين",
    date_naissance: "09/07/2005",
    moyenne_bac: "10.87"
  },
  {
    matricule: "39316808",
    nom_fr: "IFLAH",
    prenom_fr: "IMANE",
    nom_ar: "افلح",
    prenom_ar: "ايمان",
    lieu_naissance: "ورقلة",
    date_naissance: "02/03/2005",
    moyenne_bac: "12.16"
  },
  {
    matricule: "39317803",
    nom_fr: "MEDAKENE",
    prenom_fr: "MERIEM",
    nom_ar: "مدقن",
    prenom_ar: "مريم",
    lieu_naissance: "بنورة",
    date_naissance: "14/06/2006",
    moyenne_bac: "12.02"
  },
  {
    matricule: "39332006",
    nom_fr: "BEN FERDIA",
    prenom_fr: "SALMA",
    nom_ar: "بن فردية",
    prenom_ar: "سالمة",
    lieu_naissance: "الرويسات",
    date_naissance: "06/06/2005",
    moyenne_bac: "10.58"
  },
  {
    matricule: "39556908",
    nom_fr: "BAHHOU",
    prenom_fr: "KHOULOUD",
    nom_ar: "باحو",
    prenom_ar: "خلود",
    lieu_naissance: "النزلة",
    date_naissance: "12/09/2006",
    moyenne_bac: "11.09"
  },
  {
    matricule: "39556815",
    nom_fr: "KRAMA",
    prenom_fr: "HALIMA",
    nom_ar: "كرامة",
    prenom_ar: "حليمة",
    lieu_naissance: "النزلة",
    date_naissance: "26/10/2005",
    moyenne_bac: "13.63"
  },
  {
    matricule: "39573320",
    nom_fr: "TATI",
    prenom_fr: "SAMAH",
    nom_ar: "تاتي",
    prenom_ar: "سماح",
    lieu_naissance: "سيدي عامر",
    date_naissance: "03/09/2006",
    moyenne_bac: "11.66"
  },
  {
    matricule: "39320906",
    nom_fr: "KADRI",
    prenom_fr: "DJOUHAINA",
    nom_ar: "قادري",
    prenom_ar: "جهينة",
    lieu_naissance: "ورقلة",
    date_naissance: "18/03/2006",
    moyenne_bac: "11.26"
  },
  {
    matricule: "39341304",
    nom_fr: "GACEM",
    prenom_fr: "Karima yasmine",
    nom_ar: "قاسم",
    prenom_ar: "كريمة ياسمين",
    lieu_naissance: "Messaâd Djelfa",
    date_naissance: "09/08/2006",
    moyenne_bac: "10.21"
  },
  {
    matricule: "39573404",
    nom_fr: "TIDJANI",
    prenom_fr: "Serine",
    nom_ar: "التجاني",
    prenom_ar: "سيرين",
    lieu_naissance: "Tamellaht - Temacine",
    date_naissance: "06/03/2007",
    moyenne_bac: "11.62"
  },
  {
    matricule: "39564803",
    nom_fr: "GUERMIT",
    prenom_fr: "YOUSRA",
    nom_ar: "قرميط",
    prenom_ar: "يسرى",
    lieu_naissance: "تبسبست",
    date_naissance: "19/01/2004",
    moyenne_bac: "12.71"
  },
  {
    matricule: "39317819",
    nom_fr: "BABAHMOU",
    prenom_fr: "MOUNDJIA",
    nom_ar: "باباحمو",
    prenom_ar: "منجية",
    lieu_naissance: "ورقلة",
    date_naissance: "05/09/2006",
    moyenne_bac: "12.47"
  },
  {
    matricule: "39556213",
    nom_fr: "GOUGUI",
    prenom_fr: "AYAT ARAHMMEN",
    nom_ar: "قوقي",
    prenom_ar: "آية الرحمن",
    lieu_naissance: "Nezla",
    date_naissance: "06/09/2006",
    moyenne_bac: "10.58"
  },
  {
    matricule: "39563915",
    nom_fr: "ZAIRA",
    prenom_fr: "FERDOUS",
    nom_ar: "زيارة",
    prenom_ar: "فردوس",
    lieu_naissance: "تبسبست",
    date_naissance: "03/03/2006",
    moyenne_bac: "10.75"
  },
  {
    matricule: "39563119",
    nom_fr: "AZIZI",
    prenom_fr: "DOUA",
    nom_ar: "عزيزي",
    prenom_ar: "دعاء",
    lieu_naissance: "تبسبست",
    date_naissance: "05/08/2005",
    moyenne_bac: "10.96"
  },
  {
    matricule: "39312719",
    nom_fr: "BOUBLAL",
    prenom_fr: "ARIDJ",
    nom_ar: "بوبلال",
    prenom_ar: "أريج",
    lieu_naissance: "ورقلة",
    date_naissance: "28/10/2004",
    moyenne_bac: "11.12"
  },
  {
    matricule: "39569116",
    nom_fr: "HAMADOU",
    prenom_fr: "ROUFAIDA",
    nom_ar: "حمادو",
    prenom_ar: "رفيده",
    lieu_naissance: "الزاوية العابدية",
    date_naissance: "25/11/2005",
    moyenne_bac: "11.18"
  },
  {
    matricule: "39336216",
    nom_fr: "TELLALI",
    prenom_fr: "SOUHILA",
    nom_ar: "تلالي",
    prenom_ar: "سهيلة",
    lieu_naissance: "ورقلة",
    date_naissance: "26/01/2007",
    moyenne_bac: "12.18"
  },
  {
    matricule: "39573806",
    nom_fr: "BADIDJA",
    prenom_fr: "NESRINE",
    nom_ar: "باديجة",
    prenom_ar: "نسرين",
    lieu_naissance: "قوق",
    date_naissance: "08/02/2007",
    moyenne_bac: "12.03"
  },
  {
    matricule: "39562416",
    nom_fr: "MEDJOUDJA",
    prenom_fr: "ABRAR",
    nom_ar: "مجوجة",
    prenom_ar: "أبرار",
    lieu_naissance: "تبسبست",
    date_naissance: "15/02/2006",
    moyenne_bac: "12.45"
  },
  {
    matricule: "39564713",
    nom_fr: "BENNOUNA",
    prenom_fr: "WISSAL",
    nom_ar: "بن نونة",
    prenom_ar: "وصال",
    lieu_naissance: "الزاوية العابدية",
    date_naissance: "30/01/2006",
    moyenne_bac: "10.88"
  },
  {
    matricule: "39562713",
    nom_fr: "BIRECH",
    prenom_fr: "ICHRAK",
    nom_ar: "بيرش",
    prenom_ar: "إشراق",
    lieu_naissance: "بني أسود",
    date_naissance: "18/10/2006",
    moyenne_bac: "11.9"
  },
  {
    matricule: "39317317",
    nom_fr: "FETTOUHI",
    prenom_fr: "CHAIMA",
    nom_ar: "فتوحي",
    prenom_ar: "شيماء",
    lieu_naissance: "المنيعة",
    date_naissance: "15/08/2006",
    moyenne_bac: "10.43"
  },
  {
    matricule: "39336108",
    nom_fr: "BENZOUADA",
    prenom_fr: "RIHAME",
    nom_ar: "بن زوادة",
    prenom_ar: "رهام",
    lieu_naissance: "عين البيضاء",
    date_naissance: "15/03/2005",
    moyenne_bac: "11.39"
  },
  {
    matricule: "39336214",
    nom_fr: "BENSAYA",
    prenom_fr: "SEHIRE",
    nom_ar: "بن ساية",
    prenom_ar: "سهير",
    lieu_naissance: "حاسي بن عبد الله",
    date_naissance: "05/08/2006",
    moyenne_bac: "10.35"
  },
  {
    matricule: "39570405",
    nom_fr: "ZERROUKI",
    prenom_fr: "HANA",
    nom_ar: "زروقي",
    prenom_ar: "هناء",
    lieu_naissance: "تقرت",
    date_naissance: "08/09/2006",
    moyenne_bac: "12.48"
  },
  {
    matricule: "39341009",
    nom_fr: "BRAHIMI",
    prenom_fr: "SAFA",
    nom_ar: "ابراهيمي",
    prenom_ar: "صفاء",
    lieu_naissance: "ورقلة",
    date_naissance: "17/06/2006",
    moyenne_bac: "10.46"
  },
  {
    matricule: "39340703",
    nom_fr: "AMALOU",
    prenom_fr: "RANIA",
    nom_ar: "أمالو",
    prenom_ar: "رانيا",
    lieu_naissance: "ارزيو",
    date_naissance: "28/04/2007",
    moyenne_bac: "12.12"
  },
  {
    matricule: "39327217",
    nom_fr: "BENZARIATA",
    prenom_fr: "HADJER",
    nom_ar: "بن زرياطة",
    prenom_ar: "هاجر",
    lieu_naissance: "ورقلة",
    date_naissance: "04/07/2005",
    moyenne_bac: "10.55"
  },
  {
    matricule: "39326807",
    nom_fr: "BENSEDGA",
    prenom_fr: "FIRDEOUS",
    nom_ar: "بن صدقة",
    prenom_ar: "فردوس",
    lieu_naissance: "ورقلة",
    date_naissance: "04/08/2004",
    moyenne_bac: "11.44"
  },
  {
    matricule: "39336911",
    nom_fr: "ACHOU",
    prenom_fr: "HADJER",
    nom_ar: "عاشو",
    prenom_ar: "هاجر",
    lieu_naissance: "سيدي خويلد",
    date_naissance: "20/11/2006",
    moyenne_bac: "12.48"
  },
  {
    matricule: "39331409",
    nom_fr: "DIHMANA",
    prenom_fr: "AYA ERRAHMANE",
    nom_ar: "ديحمانة",
    prenom_ar: "آية الرحمان",
    lieu_naissance: "ورقلة",
    date_naissance: "30/01/2006",
    moyenne_bac: "11.13"
  },
  {
    matricule: "39336312",
    nom_fr: "MAAMRI",
    prenom_fr: "SAFA",
    nom_ar: "معمري",
    prenom_ar: "صفاء",
    lieu_naissance: "عين البيضاء",
    date_naissance: "05/09/2005",
    moyenne_bac: "10.54"
  },
  {
    matricule: "39313515",
    nom_fr: "LAMOURI",
    prenom_fr: "FARAH NOUREL OUYOUNE",
    nom_ar: "لعموري",
    prenom_ar: "فرح نور العيون",
    lieu_naissance: "القبة",
    date_naissance: "20/10/2006",
    moyenne_bac: "11.79"
  },
  {
    matricule: "39562604",
    nom_fr: "BELAHCENE",
    prenom_fr: "AMANET ERRAHMANE",
    nom_ar: "بالحسن",
    prenom_ar: "أمانة الرحمان",
    lieu_naissance: "الزاوية العابدية",
    date_naissance: "26/06/2006",
    moyenne_bac: "12.93"
  },
  {
    matricule: "39335802",
    nom_fr: "TOBCHI",
    prenom_fr: "ANFAL",
    nom_ar: "طبشي",
    prenom_ar: "أنفال",
    lieu_naissance: "الحجيرة",
    date_naissance: "26/07/2006",
    moyenne_bac: "12.04"
  },
  {
    matricule: "39327304",
    nom_fr: "REKKAL",
    prenom_fr: "HIBA",
    nom_ar: "ركال",
    prenom_ar: "هبة",
    lieu_naissance: "ورقلة",
    date_naissance: "02/01/2006",
    moyenne_bac: "12.5"
  },
  {
    matricule: "39583614",
    nom_fr: "KHOUKHA",
    prenom_fr: "DOUA",
    nom_ar: "خوخه",
    prenom_ar: "دعاء",
    lieu_naissance: "بلدة عمر",
    date_naissance: "20/10/2006",
    moyenne_bac: "11.12"
  },
  {
    matricule: "39317005",
    nom_fr: "BAZZINE",
    prenom_fr: "DOUA",
    nom_ar: "بازين",
    prenom_ar: "دعاء",
    lieu_naissance: "ورقلة",
    date_naissance: "29/05/2005",
    moyenne_bac: "11.87"
  },
  {
    matricule: "39332319",
    nom_fr: "BATMANI",
    prenom_fr: "FATMA ZOHRA",
    nom_ar: "بعثماني",
    prenom_ar: "فاطمة الزهراء",
    lieu_naissance: "ورقلة",
    date_naissance: "25/09/2006",
    moyenne_bac: "12.06"
  },
  {
    matricule: "39584013",
    nom_fr: "BENNAMIA",
    prenom_fr: "HADJER",
    nom_ar: "بن نعميه",
    prenom_ar: "هاجر",
    lieu_naissance: "بلدةعمر",
    date_naissance: "05/01/2007",
    moyenne_bac: "10.46"
  },
  {
    matricule: "39340911",
    nom_fr: "BOURENANE",
    prenom_fr: "SOUNDOUS",
    nom_ar: "بورنان",
    prenom_ar: "سندس",
    lieu_naissance: "طولقة",
    date_naissance: "05/06/2005",
    moyenne_bac: "12.01"
  },
  {
    matricule: "39576402",
    nom_fr: "GHOULA",
    prenom_fr: "SIDRET ELMONTAHA",
    nom_ar: "غوله",
    prenom_ar: "سدرة المنتهى",
    lieu_naissance: "المقارين",
    date_naissance: "07/12/2006",
    moyenne_bac: "11.62"
  },
  {
    matricule: "39336511",
    nom_fr: "ROUAI",
    prenom_fr: "FATMA SAMIHA",
    nom_ar: "رواي",
    prenom_ar: "فاطمة سميحة",
    lieu_naissance: "عين البيضاء",
    date_naissance: "30/06/2006",
    moyenne_bac: "10.97"
  },
  {
    matricule: "39326309",
    nom_fr: "TAMINA",
    prenom_fr: "KHADIDJA",
    nom_ar: "تمينة",
    prenom_ar: "خديجة",
    lieu_naissance: "ورقلة",
    date_naissance: "10/10/2006",
    moyenne_bac: "12.13"
  },
  {
    matricule: "39573214",
    nom_fr: "MEDJOUDJ",
    prenom_fr: "RAHMA",
    nom_ar: "مجوج",
    prenom_ar: "رحمه",
    lieu_naissance: "تملاحت",
    date_naissance: "20/10/2004",
    moyenne_bac: "10.03"
  },
  {
    matricule: "39327409",
    nom_fr: "LEMKADDAM",
    prenom_fr: "OUISSAL",
    nom_ar: "لمقدم",
    prenom_ar: "وصال",
    lieu_naissance: "ورقلة",
    date_naissance: "05/06/2006",
    moyenne_bac: "10.67"
  },
  {
    matricule: "39558507",
    nom_fr: "BOUGOFFA",
    prenom_fr: "OUAFA",
    nom_ar: "بوقفة",
    prenom_ar: "وفاء",
    lieu_naissance: "تبسبست",
    date_naissance: "06/12/2003",
    moyenne_bac: "11.67"
  },
  {
    matricule: "39553119",
    nom_fr: "MEBROUKI",
    prenom_fr: "SARA",
    nom_ar: "مبروكي",
    prenom_ar: "سارة",
    lieu_naissance: "الحجيرة",
    date_naissance: "01/01/2006",
    moyenne_bac: "12.35"
  },
  {
    matricule: "39317910",
    nom_fr: "BOUZID",
    prenom_fr: "NOUR EL HOUDA",
    nom_ar: "بوزيد",
    prenom_ar: "نور الهدى",
    lieu_naissance: "ورقلة",
    date_naissance: "15/06/2005",
    moyenne_bac: "10.47"
  },
  {
    matricule: "39576711",
    nom_fr: "SAIDI",
    prenom_fr: "MERIEM",
    nom_ar: "السعيدي",
    prenom_ar: "مريم",
    lieu_naissance: "المقارين",
    date_naissance: "08/01/2006",
    moyenne_bac: "12.09"
  },
  {
    matricule: "39332704",
    nom_fr: "BENLARBI",
    prenom_fr: "MERIEM",
    nom_ar: "بن العربي",
    prenom_ar: "مريم",
    lieu_naissance: "ورقلة",
    date_naissance: "11/03/2006",
    moyenne_bac: "11.13"
  },
  {
    matricule: "39573909",
    nom_fr: "TADJINE",
    prenom_fr: "OUARDA",
    nom_ar: "طاجين",
    prenom_ar: "ورده",
    lieu_naissance: "تماسين",
    date_naissance: "22/06/2006",
    moyenne_bac: "12.32"
  },
  {
    matricule: "39563301",
    nom_fr: "KECHACHE",
    prenom_fr: "ROUIDA",
    nom_ar: "كشاش",
    prenom_ar: "رويدة",
    lieu_naissance: "تقرت",
    date_naissance: "31/07/2006",
    moyenne_bac: "13.73"
  },
  {
    matricule: "39318010",
    nom_fr: "EDDOUD",
    prenom_fr: "YAMINA TASNIME",
    nom_ar: "الدود",
    prenom_ar: "يمينة تسنيم",
    lieu_naissance: "ورقلة",
    date_naissance: "11/09/2006",
    moyenne_bac: "13.77"
  },
  {
    matricule: "39316911",
    nom_fr: "FAKLOU",
    prenom_fr: "HANANE",
    nom_ar: "فقلو",
    prenom_ar: "حنان",
    lieu_naissance: "ورقلة",
    date_naissance: "22/09/2006",
    moyenne_bac: "11.47"
  },
  {
    matricule: "39557008",
    nom_fr: "ABSAOUI",
    prenom_fr: "RANIA",
    nom_ar: "عبساوي",
    prenom_ar: "رانيا",
    lieu_naissance: "النزلة",
    date_naissance: "04/08/2006",
    moyenne_bac: "11.82"
  },
  {
    matricule: "39556813",
    nom_fr: "BEBBA",
    prenom_fr: "HASNA",
    nom_ar: "ببه",
    prenom_ar: "حسناء",
    lieu_naissance: "النزلة",
    date_naissance: "04/06/2006",
    moyenne_bac: "11.51"
  },
  {
    matricule: "39326002",
    nom_fr: "FAKIH",
    prenom_fr: "ISRA",
    nom_ar: "فقيه",
    prenom_ar: "إسراء",
    lieu_naissance: "ورقلة",
    date_naissance: "06/09/2006",
    moyenne_bac: "11.64"
  },
  {
    matricule: "39336015",
    nom_fr: "CHERIET",
    prenom_fr: "DOUA",
    nom_ar: "شريط",
    prenom_ar: "دعاء",
    lieu_naissance: "ورقلة",
    date_naissance: "03/12/2004",
    moyenne_bac: "10.84"
  },
  {
    matricule: "39579520",
    nom_fr: "CHAOUIA",
    prenom_fr: "IMANE",
    nom_ar: "شوية",
    prenom_ar: "ايمان",
    lieu_naissance: "الطيبات",
    date_naissance: "24/10/2006",
    moyenne_bac: "11.3"
  },
  {
    matricule: "39570207",
    nom_fr: "FARHI",
    prenom_fr: "MALAK",
    nom_ar: "فرحي",
    prenom_ar: "ملاك",
    lieu_naissance: "قسنطينة",
    date_naissance: "27/01/2007",
    moyenne_bac: "11.93"
  },
  {
    matricule: "39326419",
    nom_fr: "BABAHAMOU",
    prenom_fr: "SARRA",
    nom_ar: "بابا حمو",
    prenom_ar: "سارة",
    lieu_naissance: "ورقلة",
    date_naissance: "22/12/2006",
    moyenne_bac: "11.34"
  },
  {
    matricule: "39336401",
    nom_fr: "MESROUK",
    prenom_fr: "AICHA",
    nom_ar: "مسروق",
    prenom_ar: "عائشة",
    lieu_naissance: "عين البيضاء",
    date_naissance: "30/06/2006",
    moyenne_bac: "12.99"
  },
  {
    matricule: "39332914",
    nom_fr: "HADDIG",
    prenom_fr: "HIBAT ELRRAHMANE",
    nom_ar: "حذيق",
    prenom_ar: "هبة الرحمان",
    lieu_naissance: "ورقلة",
    date_naissance: "25/11/2005",
    moyenne_bac: "11.81"
  },
  {
    matricule: "39336309",
    nom_fr: "GOUARAH",
    prenom_fr: "SABRINA",
    nom_ar: "قوارح",
    prenom_ar: "صابرينة",
    lieu_naissance: "سيدي خويلد",
    date_naissance: "25/06/2005",
    moyenne_bac: "11.23"
  },
  {
    matricule: "39558207",
    nom_fr: "ZENNOU",
    prenom_fr: "MALAK",
    nom_ar: "زنو",
    prenom_ar: "ملاك",
    lieu_naissance: "النزلة",
    date_naissance: "08/06/2006",
    moyenne_bac: "11.96"
  },
  {
    matricule: "39558310",
    nom_fr: "BERREBEUH",
    prenom_fr: "NOUR EL IMANE",
    nom_ar: "بربح",
    prenom_ar: "نور الايمان",
    lieu_naissance: "النزلة",
    date_naissance: "19/07/2006",
    moyenne_bac: "10.84"
  },
  {
    matricule: "39583718",
    nom_fr: "GHETTAS",
    prenom_fr: "SAFA",
    nom_ar: "غطاس",
    prenom_ar: "صفاء",
    lieu_naissance: "بلدة عمر",
    date_naissance: "10/05/2003",
    moyenne_bac: "11.73"
  },
  {
    matricule: "39331906",
    nom_fr: "BEN MOUSSA",
    prenom_fr: "RIHAB",
    nom_ar: "بن موسى",
    prenom_ar: "رحاب",
    lieu_naissance: "الرويسات",
    date_naissance: "17/11/2006",
    moyenne_bac: "10.23"
  },
  {
    matricule: "39336019",
    nom_fr: "LARIT",
    prenom_fr: "RITAGE FATMA ZOHRA",
    nom_ar: "لعريط",
    prenom_ar: "رتاج فاطمة الزهراء",
    lieu_naissance: "ورقلة",
    date_naissance: "04/12/2006",
    moyenne_bac: "11.12"
  },
  {
    matricule: "39579614",
    nom_fr: "BELMESSAOUD",
    prenom_fr: "BOUTHAYNA",
    nom_ar: "بالمسعود",
    prenom_ar: "بوثينه",
    lieu_naissance: "الطيبات",
    date_naissance: "01/04/2006",
    moyenne_bac: "10.5"
  },
  {
    matricule: "39580407",
    nom_fr: "KOURDAS",
    prenom_fr: "ABDELALI",
    nom_ar: "كورداس",
    prenom_ar: "عبد العالي",
    lieu_naissance: "تقرت",
    date_naissance: "25/08/2004",
    moyenne_bac: "11.8"
  },
  {
    matricule: "39581018",
    nom_fr: "DJEBBAS",
    prenom_fr: "HADIL",
    nom_ar: "جباس",
    prenom_ar: "هديل",
    lieu_naissance: "الطيبات",
    date_naissance: "28/09/2005",
    moyenne_bac: "10.58"
  },
  {
    matricule: "39332318",
    nom_fr: "MEDDOUR",
    prenom_fr: "FATIMA ZOHRA",
    nom_ar: "مدور",
    prenom_ar: "فاطمة الزهراء",
    lieu_naissance: "ورقلة",
    date_naissance: "13/03/2006",
    moyenne_bac: "13.16"
  },
  {
    matricule: "39313020",
    nom_fr: "BOUCHAREB",
    prenom_fr: "KHOULOUD",
    nom_ar: "بوشارب",
    prenom_ar: "خلود",
    lieu_naissance: "ورقلة",
    date_naissance: "06/06/2005",
    moyenne_bac: "10.54"
  },
  {
    matricule: "39317406",
    nom_fr: "HALFAOUI",
    prenom_fr: "AICHA",
    nom_ar: "حلفاوي",
    prenom_ar: "عائشة",
    lieu_naissance: "ورقلة",
    date_naissance: "01/05/2006",
    moyenne_bac: "11.02"
  },
  {
    matricule: "39556601",
    nom_fr: "BOUGOFFA",
    prenom_fr: "IKHLAS",
    nom_ar: "بوقفة",
    prenom_ar: "اخلاص",
    lieu_naissance: "الحجيرة",
    date_naissance: "01/04/2006",
    moyenne_bac: "11.59"
  },
  {
    matricule: "39325803",
    nom_fr: "ZERROUK",
    prenom_fr: "AMAL",
    nom_ar: "زروق",
    prenom_ar: "آمال",
    lieu_naissance: "ورقلة",
    date_naissance: "14/04/2006",
    moyenne_bac: "12.16"
  },
  {
    matricule: "39563115",
    nom_fr: "BENNOUNA",
    prenom_fr: "DOUA",
    nom_ar: "بن نونة",
    prenom_ar: "دعاء",
    lieu_naissance: "الزاوية العابدية",
    date_naissance: "08/04/2004",
    moyenne_bac: "11.13"
  },
  {
    matricule: "39332004",
    nom_fr: "MAAMRI",
    prenom_fr: "SARAH AYET ERRAHMANE",
    nom_ar: "معمري",
    prenom_ar: "ساره آية الرحمان",
    lieu_naissance: "ورقلة",
    date_naissance: "22/12/2006",
    moyenne_bac: "10.21"
  },
  {
    matricule: "39318009",
    nom_fr: "BOUCHRIT",
    prenom_fr: "YEMNA",
    nom_ar: "بوشريط",
    prenom_ar: "يمنى",
    lieu_naissance: "ورقلة",
    date_naissance: "10/01/2005",
    moyenne_bac: "11.6"
  },
  {
    matricule: "39573305",
    nom_fr: "GHERBI",
    prenom_fr: "ZAHRAT EL OULA",
    nom_ar: "غربي",
    prenom_ar: "زهرة العلاء",
    lieu_naissance: "سيدي عامر",
    date_naissance: "26/12/2006",
    moyenne_bac: "11.76"
  },
  {
    matricule: "39556314",
    nom_fr: "BELKACEM",
    prenom_fr: "ALA ELLAH",
    nom_ar: "بلقاسم",
    prenom_ar: "ألاء الله",
    lieu_naissance: "النزلة",
    date_naissance: "27/06/2006",
    moyenne_bac: "11.42"
  },
  {
    matricule: "39564513",
    nom_fr: "ARAR",
    prenom_fr: "NOUR ELIMAN",
    nom_ar: "عرعار",
    prenom_ar: "نور الإيمان",
    lieu_naissance: "بني يسود",
    date_naissance: "12/11/2006",
    moyenne_bac: "10.21"
  },
  {
    matricule: "39562406",
    nom_fr: "BEN LAMOUDI",
    prenom_fr: "AYA",
    nom_ar: "بن لعمودي",
    prenom_ar: "آية",
    lieu_naissance: "تبسبست",
    date_naissance: "28/04/2005",
    moyenne_bac: "11.47"
  },
  {
    matricule: "39572803",
    nom_fr: "REZIG",
    prenom_fr: "AYAT ERRAHMANE",
    nom_ar: "رزيق",
    prenom_ar: "آية الرحمان",
    lieu_naissance: "سيدي عامر تماسين",
    date_naissance: "29/05/2006",
    moyenne_bac: "11.59"
  },
  {
    matricule: "39341002",
    nom_fr: "SAHED",
    prenom_fr: "CHAIMA",
    nom_ar: "سهاد",
    prenom_ar: "شيماء",
    lieu_naissance: "حاسي مسعود",
    date_naissance: "15/05/2006",
    moyenne_bac: "11.14"
  },
  {
    matricule: "39573912",
    nom_fr: "LEBSSISSE",
    prenom_fr: "OUISAL",
    nom_ar: "لبسيس",
    prenom_ar: "وصال",
    lieu_naissance: "سيدي عامر",
    date_naissance: "03/06/2006",
    moyenne_bac: "12.57"
  },
  {
    matricule: "39344915",
    nom_fr: "SOUICI",
    prenom_fr: "OUARDA",
    nom_ar: "سويسي",
    prenom_ar: "وردة",
    lieu_naissance: "أنقوسة",
    date_naissance: "03/06/2006",
    moyenne_bac: "12.09"
  },
  {
    matricule: "39346101",
    nom_fr: "MERABETI",
    prenom_fr: "RAHMA",
    nom_ar: "مرابطي",
    prenom_ar: "رحمة",
    lieu_naissance: "انقوسة",
    date_naissance: "27/09/2005",
    moyenne_bac: "11.26"
  },
  {
    matricule: "39562906",
    nom_fr: "HANNOUNA",
    prenom_fr: "CHAIMA",
    nom_ar: "حنونة",
    prenom_ar: "الشيماء",
    lieu_naissance: "الزاوية العابدية",
    date_naissance: "06/08/2006",
    moyenne_bac: "12.17"
  },
  {
    matricule: "39341313",
    nom_fr: "DJAIDIR",
    prenom_fr: "LINDA",
    nom_ar: "جعيدير",
    prenom_ar: "ليندة",
    lieu_naissance: "حاسي مسعود",
    date_naissance: "26/06/2006",
    moyenne_bac: "10.77"
  },
  {
    matricule: "39569819",
    nom_fr: "SAOUD",
    prenom_fr: "MARIA",
    nom_ar: "سعود",
    prenom_ar: "مارية",
    lieu_naissance: "باتنة",
    date_naissance: "13/09/2006",
    moyenne_bac: "11.29"
  },
  {
    matricule: "39585817",
    nom_fr: "SAYAH BENAISSA",
    prenom_fr: "SALIMA",
    nom_ar: "السايح بن عيسى",
    prenom_ar: "سليمة",
    lieu_naissance: "الطيبين",
    date_naissance: "02/08/2005",
    moyenne_bac: "12.78"
  },
  {
    matricule: "39569812",
    nom_fr: "BENKADDOUR",
    prenom_fr: "LINA",
    nom_ar: "بن قدور",
    prenom_ar: "لينة",
    lieu_naissance: "تقرت",
    date_naissance: "16/10/2006",
    moyenne_bac: "12.41"
  },
  {
    matricule: "39325801",
    nom_fr: "HAFIANE",
    prenom_fr: "ASSIA ALA ALLAH",
    nom_ar: "حفيان",
    prenom_ar: "آسيا ألاء الله",
    lieu_naissance: "ورقلة",
    date_naissance: "29/03/2007",
    moyenne_bac: "12.76"
  },
  {
    matricule: "39558416",
    nom_fr: "BENATTIA",
    prenom_fr: "HANA",
    nom_ar: "بن عطية",
    prenom_ar: "هناء",
    lieu_naissance: "النزلة",
    date_naissance: "11/01/2007",
    moyenne_bac: "12.93"
  },
  {
    matricule: "39576205",
    nom_fr: "KOPPI",
    prenom_fr: "BASMA",
    nom_ar: "قبي",
    prenom_ar: "بسمه",
    lieu_naissance: "المقارين",
    date_naissance: "12/09/2006",
    moyenne_bac: "12.23"
  },
  {
    matricule: "39583706",
    nom_fr: "KHEMRI",
    prenom_fr: "SAIDA",
    nom_ar: "خمري",
    prenom_ar: "سعيده",
    lieu_naissance: "بلدة عمر",
    date_naissance: "25/05/2005",
    moyenne_bac: "10.73"
  },
  {
    matricule: "39563201",
    nom_fr: "NAILI",
    prenom_fr: "DOUA",
    nom_ar: "نايلي",
    prenom_ar: "دعاء",
    lieu_naissance: "الزاوية العابدية",
    date_naissance: "30/11/2006",
    moyenne_bac: "10.98"
  },
  {
    matricule: "39320804",
    nom_fr: "BECHENAB",
    prenom_fr: "INASSE",
    nom_ar: "بشنب",
    prenom_ar: "إيناس",
    lieu_naissance: "الرويسات",
    date_naissance: "02/04/2006",
    moyenne_bac: "10.38"
  },
  {
    matricule: "39317512",
    nom_fr: "TOUATI",
    prenom_fr: "FATMA ZOHRA",
    nom_ar: "تواتي",
    prenom_ar: "فاطمة الزهراء",
    lieu_naissance: "ورقلة",
    date_naissance: "22/07/2006",
    moyenne_bac: "11.13"
  },
  {
    matricule: "39321320",
    nom_fr: "CHIKHA AMARA",
    prenom_fr: "GHOZLANE",
    nom_ar: "شيخة عمارة",
    prenom_ar: "غزلان",
    lieu_naissance: "الوادي",
    date_naissance: "31/07/2006",
    moyenne_bac: "10.82"
  },
  {
    matricule: "39569011",
    nom_fr: "BELKACEM",
    prenom_fr: "KHADIDJA",
    nom_ar: "بلقاسم",
    prenom_ar: "خديجة",
    lieu_naissance: "تقرت",
    date_naissance: "16/06/2007",
    moyenne_bac: "12.04"
  },
  {
    matricule: "39317110",
    nom_fr: "MEKHERMECHE",
    prenom_fr: "RAOUANE NOUR",
    nom_ar: "مخرمش",
    prenom_ar: "روان نور",
    lieu_naissance: "ورقلة",
    date_naissance: "18/04/2006",
    moyenne_bac: "10.5"
  },
  {
    matricule: "39583920",
    nom_fr: "GHETTAS",
    prenom_fr: "MESSAOUDA",
    nom_ar: "غطاس",
    prenom_ar: "مسعوده",
    lieu_naissance: "بلدة عمر",
    date_naissance: "01/05/2006",
    moyenne_bac: "13.28"
  },
  {
    matricule: "39573002",
    nom_fr: "MATALLAH",
    prenom_fr: "INTISSAR",
    nom_ar: "معطاء الله",
    prenom_ar: "إنتصار",
    lieu_naissance: "سيدي عامر",
    date_naissance: "04/09/2006",
    moyenne_bac: "13.09"
  },
  {
    matricule: "39557002",
    nom_fr: "KOULL",
    prenom_fr: "DALAL",
    nom_ar: "كل",
    prenom_ar: "دلال",
    lieu_naissance: "النزلة",
    date_naissance: "30/07/2006",
    moyenne_bac: "11.53"
  },
  {
    matricule: "39309118",
    nom_fr: "BENNADJI",
    prenom_fr: "SALMA",
    nom_ar: "بن ناجي",
    prenom_ar: "سلمى",
    lieu_naissance: "ورقلة",
    date_naissance: "05/02/2006",
    moyenne_bac: "12.66"
  },
  {
    matricule: "39573906",
    nom_fr: "FAROUROU",
    prenom_fr: "HOUYEM",
    nom_ar: "فارورو",
    prenom_ar: "هيام",
    lieu_naissance: "سيدي عامر",
    date_naissance: "07/04/2006",
    moyenne_bac: "10.77"
  },
  {
    matricule: "39557710",
    nom_fr: "SALEM",
    prenom_fr: "FATIHA",
    nom_ar: "سالم",
    prenom_ar: "فتيحة",
    lieu_naissance: "تقرت",
    date_naissance: "25/02/2005",
    moyenne_bac: "12.45"
  },
  {
    matricule: "39573318",
    nom_fr: "RABIAI",
    prenom_fr: "SELSSABIL",
    nom_ar: "الربيع",
    prenom_ar: "سلسبيل",
    lieu_naissance: "تملاحت",
    date_naissance: "01/02/2007",
    moyenne_bac: "12.39"
  },
  {
    matricule: "39580817",
    nom_fr: "CHAOUIA",
    prenom_fr: "MERIEM",
    nom_ar: "شويه",
    prenom_ar: "مريم",
    lieu_naissance: "الطيبات",
    date_naissance: "22/09/2005",
    moyenne_bac: "11.08"
  },
  {
    matricule: "39558317",
    nom_fr: "BELAKHDAR",
    prenom_fr: "NOUR ELHOUDA",
    nom_ar: "بلخضر",
    prenom_ar: "نور الهدى",
    lieu_naissance: "النزلة",
    date_naissance: "13/04/2006",
    moyenne_bac: "10.14"
  },
  {
    matricule: "39365011",
    nom_fr: "LHERAOUA",
    prenom_fr: "AMIRA CHAIMA",
    nom_ar: "لهراوة",
    prenom_ar: "أميرة شيماء",
    lieu_naissance: "ورقلة",
    date_naissance: "22/05/2002",
    moyenne_bac: "11.15"
  },
  {
    matricule: "39325808",
    nom_fr: "MOULAY",
    prenom_fr: "AYA RITAJ",
    nom_ar: "مولاي",
    prenom_ar: "آية رتاج",
    lieu_naissance: "ورقلة",
    date_naissance: "20/09/2006",
    moyenne_bac: "12.07"
  },
  {
    matricule: "39336520",
    nom_fr: "HADAD",
    prenom_fr: "FERIAL",
    nom_ar: "حداد",
    prenom_ar: "فريال",
    lieu_naissance: "عين البيضاء",
    date_naissance: "16/07/2005",
    moyenne_bac: "10.96"
  },
  {
    matricule: "39580708",
    nom_fr: "LOMBARKIA",
    prenom_fr: "MARIA",
    nom_ar: "لمباركية",
    prenom_ar: "مارية",
    lieu_naissance: "تقرت",
    date_naissance: "05/07/2005",
    moyenne_bac: "12.38"
  },
  {
    matricule: "39562602",
    nom_fr: "BEKKARI",
    prenom_fr: "OUMELKHIR",
    nom_ar: "بكاري",
    prenom_ar: "أم الخير",
    lieu_naissance: "تبسبست",
    date_naissance: "17/12/2006",
    moyenne_bac: "11.79"
  },
  {
    matricule: "39313113",
    nom_fr: "BENSLIMANE",
    prenom_fr: "REFAIDA",
    nom_ar: "بن سليمان",
    prenom_ar: "رفيدة",
    lieu_naissance: "ورقلة",
    date_naissance: "02/11/2006",
    moyenne_bac: "12.74"
  },
  {
    matricule: "39563202",
    nom_fr: "RAHMANI",
    prenom_fr: "DOUAA",
    nom_ar: "رحماني",
    prenom_ar: "دعاء",
    lieu_naissance: "النزلة",
    date_naissance: "19/12/2006",
    moyenne_bac: "10.6"
  },
  {
    matricule: "39563215",
    nom_fr: "BEKHTA",
    prenom_fr: "REFAIDA",
    nom_ar: "بختة",
    prenom_ar: "رفيدة",
    lieu_naissance: "تبسبست",
    date_naissance: "07/09/2006",
    moyenne_bac: "11.92"
  },
  {
    matricule: "39557216",
    nom_fr: "BOUDOUH",
    prenom_fr: "SALSABIL",
    nom_ar: "بودوح",
    prenom_ar: "سلسبيل",
    lieu_naissance: "عين الصحراء",
    date_naissance: "03/11/2005",
    moyenne_bac: "10.33"
  },
  {
    matricule: "39563710",
    nom_fr: "KOBBI",
    prenom_fr: "TAIBA",
    nom_ar: "قبي",
    prenom_ar: "طيبة",
    lieu_naissance: "النزلة",
    date_naissance: "06/09/2006",
    moyenne_bac: "11.34"
  },
  {
    matricule: "39573718",
    nom_fr: "RETMI",
    prenom_fr: "MANAL",
    nom_ar: "الرتمي",
    prenom_ar: "منال",
    lieu_naissance: "تملاحت",
    date_naissance: "07/03/2006",
    moyenne_bac: "10.28"
  },
  {
    matricule: "39552809",
    nom_fr: "BERREGUI",
    prenom_fr: "ASMA",
    nom_ar: "بالرقي",
    prenom_ar: "أسماء",
    lieu_naissance: "تقرت",
    date_naissance: "01/04/2006",
    moyenne_bac: "13.72"
  },
  {
    matricule: "39564307",
    nom_fr: "BENNA",
    prenom_fr: "MERIEM ELBATOUL",
    nom_ar: "البنه",
    prenom_ar: "مريم البتول",
    lieu_naissance: "إن أمناس",
    date_naissance: "18/04/2007",
    moyenne_bac: "10.62"
  },
  {
    matricule: "39317307",
    nom_fr: "MELOUKA",
    prenom_fr: "CHAHED",
    nom_ar: "ملوكة",
    prenom_ar: "شهد",
    lieu_naissance: "ورقلة",
    date_naissance: "10/03/2007",
    moyenne_bac: "11.84"
  },
  {
    matricule: "39586202",
    nom_fr: "BENETTOUATI",
    prenom_fr: "NAOUAL",
    nom_ar: "بن التواتي",
    prenom_ar: "نوال",
    lieu_naissance: "العالية",
    date_naissance: "05/05/2005",
    moyenne_bac: "11.35"
  },
  {
    matricule: "39321718",
    nom_fr: "SOUALAH",
    prenom_fr: "NOUR ELHOUDA",
    nom_ar: "صوالاح",
    prenom_ar: "نور الهدى",
    lieu_naissance: "ورقلة",
    date_naissance: "29/10/2006",
    moyenne_bac: "10.46"
  },
  {
    matricule: "39332014",
    nom_fr: "ABD ELLAOUI",
    prenom_fr: "SALSABIL",
    nom_ar: "عبد اللاوي",
    prenom_ar: "سلسبيل",
    lieu_naissance: "بوسعادة",
    date_naissance: "08/03/2006",
    moyenne_bac: "12.85"
  },
  {
    matricule: "39317603",
    nom_fr: "BOUANANE",
    prenom_fr: "LINA",
    nom_ar: "بوعنان",
    prenom_ar: "لينا",
    lieu_naissance: "ورقلة",
    date_naissance: "17/07/2006",
    moyenne_bac: "11.27"
  },
  {
    matricule: "39579302",
    nom_fr: "LEBBOUZ",
    prenom_fr: "ACHOUAK",
    nom_ar: "لبوز",
    prenom_ar: "أشواق",
    lieu_naissance: "بن ناصر",
    date_naissance: "08/06/2006",
    moyenne_bac: "12.9"
  },
  {
    matricule: "39584004",
    nom_fr: "MAHDJOUBI",
    prenom_fr: "NESRINE",
    nom_ar: "محجوبي",
    prenom_ar: "نسرين",
    lieu_naissance: "بلدة عمر",
    date_naissance: "05/03/2005",
    moyenne_bac: "11.05"
  },
  {
    matricule: "39557411",
    nom_fr: "MADANI",
    prenom_fr: "CHEMISSA",
    nom_ar: "مداني",
    prenom_ar: "شميسة",
    lieu_naissance: "النزلة",
    date_naissance: "02/08/2005",
    moyenne_bac: "12.39"
  },
  {
    matricule: "39564608",
    nom_fr: "HAMROUNI",
    prenom_fr: "HIBET ARRAHMANE",
    nom_ar: "حمروني",
    prenom_ar: "هبة الرحمان",
    lieu_naissance: "تبسبست",
    date_naissance: "10/11/2006",
    moyenne_bac: "13.4"
  },
  {
    matricule: "39576309",
    nom_fr: "ZOUZOU",
    prenom_fr: "RITADJ",
    nom_ar: "زوزو",
    prenom_ar: "رتاج",
    lieu_naissance: "المقارين",
    date_naissance: "13/07/2006",
    moyenne_bac: "11.78"
  },
  {
    matricule: "39320613",
    nom_fr: "BOUAKA",
    prenom_fr: "ASMA",
    nom_ar: "بوعكة",
    prenom_ar: "أسماء",
    lieu_naissance: "ورقلة",
    date_naissance: "18/08/2005",
    moyenne_bac: "12.15"
  },
  {
    matricule: "39584011",
    nom_fr: "KADI",
    prenom_fr: "NOUR ELHOUDA",
    nom_ar: "قاضي",
    prenom_ar: "نور الهدى",
    lieu_naissance: "بلدة عمر",
    date_naissance: "01/12/2006",
    moyenne_bac: "10.85"
  },
  {
    matricule: "39558312",
    nom_fr: "TEMIRA",
    prenom_fr: "NOUR ELHIDAIA",
    nom_ar: "تميرة",
    prenom_ar: "نور الهداية",
    lieu_naissance: "النزلة",
    date_naissance: "22/01/2006",
    moyenne_bac: "12.16"
  },
  {
    matricule: "39576105",
    nom_fr: "GHARA",
    prenom_fr: "IJLAL",
    nom_ar: "غاره",
    prenom_ar: "إجلال",
    lieu_naissance: "المقارين",
    date_naissance: "06/11/2005",
    moyenne_bac: "10.87"
  },
  {
    matricule: "39569312",
    nom_fr: "SRAIRI",
    prenom_fr: "SOUNDOUS",
    nom_ar: "سرايري",
    prenom_ar: "سندس",
    lieu_naissance: "باتنة",
    date_naissance: "22/12/2004",
    moyenne_bac: "12.65"
  },
  {
    matricule: "39556715",
    nom_fr: "BABA SACI",
    prenom_fr: "BACHERA",
    nom_ar: "باباساسي",
    prenom_ar: "بشرة",
    lieu_naissance: "النزلة",
    date_naissance: "06/01/2004",
    moyenne_bac: "10.63"
  },
  {
    matricule: "39340707",
    nom_fr: "MIHI",
    prenom_fr: "RAHMA",
    nom_ar: "ميهي",
    prenom_ar: "رحمة",
    lieu_naissance: "حاسي مسعود",
    date_naissance: "27/05/2006",
    moyenne_bac: "11.38"
  },
  {
    matricule: "39553708",
    nom_fr: "NAAM",
    prenom_fr: "NOURELHOUDA",
    nom_ar: "نعام",
    prenom_ar: "نور الهدى",
    lieu_naissance: "الحجيرة",
    date_naissance: "24/03/2007",
    moyenne_bac: "13.75"
  },
  {
    matricule: "39341219",
    nom_fr: "DRAOUA",
    prenom_fr: "FATIMA KHOULOUD",
    nom_ar: "دراوة",
    prenom_ar: "فاطمة خلود",
    lieu_naissance: "الشلف",
    date_naissance: "10/10/2006",
    moyenne_bac: "10.26"
  },
  {
    matricule: "39340419",
    nom_fr: "BELMEHBOUL",
    prenom_fr: "ANFAL",
    nom_ar: "بلمهبول",
    prenom_ar: "انفال",
    lieu_naissance: "ميلة",
    date_naissance: "27/09/2006",
    moyenne_bac: "10.48"
  },
  {
    matricule: "39332714",
    nom_fr: "BOUKOUADA",
    prenom_fr: "MALAK",
    nom_ar: "بوقوادة",
    prenom_ar: "ملاك",
    lieu_naissance: "الرويسات",
    date_naissance: "01/01/2006",
    moyenne_bac: "11.88"
  },
  {
    matricule: "39340502",
    nom_fr: "NAMOUNE",
    prenom_fr: "IMANE",
    nom_ar: "نعمون",
    prenom_ar: "ايمان",
    lieu_naissance: "حاسي مسعود",
    date_naissance: "11/11/2006",
    moyenne_bac: "10.48"
  },
  {
    matricule: "39552815",
    nom_fr: "MAHAMMEDI",
    prenom_fr: "AMIRA",
    nom_ar: "محمدي",
    prenom_ar: "أميرة",
    lieu_naissance: "الحجيرة",
    date_naissance: "25/08/2006",
    moyenne_bac: "11.88"
  },
  {
    matricule: "39585811",
    nom_fr: "RIDA",
    prenom_fr: "ZINEB",
    nom_ar: "ريدة",
    prenom_ar: "زينب",
    lieu_naissance: "تقرت",
    date_naissance: "01/02/2006",
    moyenne_bac: "12.59"
  },
  {
    matricule: "39313804",
    nom_fr: "RAHALI",
    prenom_fr: "MALEK",
    nom_ar: "رحالي",
    prenom_ar: "ملاك",
    lieu_naissance: "ورقلة",
    date_naissance: "23/03/2006",
    moyenne_bac: "11.17"
  },
  {
    matricule: "39332311",
    nom_fr: "SELMI",
    prenom_fr: "FATMA",
    nom_ar: "سلمي",
    prenom_ar: "فاطمة",
    lieu_naissance: "ورقلة",
    date_naissance: "08/03/2006",
    moyenne_bac: "12.93"
  },
  {
    matricule: "39570411",
    nom_fr: "HADDOUCHI",
    prenom_fr: "WISSAL",
    nom_ar: "حدوشي",
    prenom_ar: "وصال",
    lieu_naissance: "عين التوتة",
    date_naissance: "28/06/2006",
    moyenne_bac: "11.19"
  },
  {
    matricule: "39573907",
    nom_fr: "LAKEHAL",
    prenom_fr: "WIAM",
    nom_ar: "لكحل",
    prenom_ar: "وئام",
    lieu_naissance: "تماسين",
    date_naissance: "05/07/2006",
    moyenne_bac: "11.7"
  },
  {
    matricule: "39564003",
    nom_fr: "GUECHIRA",
    prenom_fr: "KARIMA",
    nom_ar: "قشيرة",
    prenom_ar: "كريمة",
    lieu_naissance: "تبسبست",
    date_naissance: "20/01/2007",
    moyenne_bac: "11.53"
  },
  {
    matricule: "39370418",
    nom_fr: "DJEBBOURI",
    prenom_fr: "MELOUKA",
    nom_ar: "جبوري",
    prenom_ar: "ملوكة",
    lieu_naissance: "مولاي العربي",
    date_naissance: "21/12/1983",
    moyenne_bac: "12.59"
  },
  {
    matricule: "39568716",
    nom_fr: "HERZALLAH",
    prenom_fr: "INAS",
    nom_ar: "حرز الله",
    prenom_ar: "إيناس",
    lieu_naissance: "تقرت",
    date_naissance: "11/12/2006",
    moyenne_bac: "10.39"
  },
  {
    matricule: "39308903",
    nom_fr: "BEN CHOUIHA",
    prenom_fr: "DJIHAD",
    nom_ar: "بن شويحة",
    prenom_ar: "جهاد",
    lieu_naissance: "غرداية",
    date_naissance: "21/01/2007",
    moyenne_bac: "11.41"
  },
  {
    matricule: "39326414",
    nom_fr: "MIMOUNI",
    prenom_fr: "SADJIDA",
    nom_ar: "ميموني",
    prenom_ar: "ساجدة",
    lieu_naissance: "ورقلة",
    date_naissance: "17/04/2005",
    moyenne_bac: "10.41"
  },
  {
    matricule: "39340320",
    nom_fr: "BEKKOUCHE",
    prenom_fr: "AHLAM",
    nom_ar: "بكوش",
    prenom_ar: "احلام",
    lieu_naissance: "حاسي مسعود",
    date_naissance: "05/10/2006",
    moyenne_bac: "11.45"
  },
  {
    matricule: "39316910",
    nom_fr: "MEBROUKI",
    prenom_fr: "HANANE",
    nom_ar: "مبروكي",
    prenom_ar: "حنان",
    lieu_naissance: "ورقلة",
    date_naissance: "18/08/2005",
    moyenne_bac: "10.48"
  },
  {
    matricule: "39564616",
    nom_fr: "GASEM",
    prenom_fr: "HANA",
    nom_ar: "قاسم",
    prenom_ar: "هناء",
    lieu_naissance: "تبسبست",
    date_naissance: "30/09/2004",
    moyenne_bac: "11.99"
  },
  {
    matricule: "39317517",
    nom_fr: "KHOUALED",
    prenom_fr: "FERDOUS",
    nom_ar: "خوالد",
    prenom_ar: "فردوس",
    lieu_naissance: "ورقلة",
    date_naissance: "13/04/2005",
    moyenne_bac: "11.92"
  },
  {
    matricule: "39336519",
    nom_fr: "BOUKHALIFA",
    prenom_fr: "FERDOUS ISRA",
    nom_ar: "بوخليفة",
    prenom_ar: "فردوس إسراء",
    lieu_naissance: "ورقلة",
    date_naissance: "25/08/2006",
    moyenne_bac: "10.76"
  },
  {
    matricule: "39579518",
    nom_fr: "MANSOURI",
    prenom_fr: "IMANE",
    nom_ar: "منصوري",
    prenom_ar: "ايمان",
    lieu_naissance: "الطيبات",
    date_naissance: "22/08/2005",
    moyenne_bac: "11.36"
  },
  {
    matricule: "39326813",
    nom_fr: "CHARANE",
    prenom_fr: "KAOUTHARE",
    nom_ar: "شعران",
    prenom_ar: "كوثر",
    lieu_naissance: "ورقلة",
    date_naissance: "02/09/2006",
    moyenne_bac: "13.07"
  },
  {
    matricule: "39341403",
    nom_fr: "BENGHANEM",
    prenom_fr: "MOHAMED ELKAMEL",
    nom_ar: "بن غانم",
    prenom_ar: "محمد الكامل",
    lieu_naissance: "خنشلة",
    date_naissance: "12/12/2006",
    moyenne_bac: "11.12"
  },
  {
    matricule: "39313110",
    nom_fr: "BERHANE",
    prenom_fr: "RIHAB",
    nom_ar: "برهان",
    prenom_ar: "رحاب",
    lieu_naissance: "ورقلة",
    date_naissance: "03/05/2005",
    moyenne_bac: "12.52"
  },
  {
    matricule: "39317820",
    nom_fr: "ZATOUT",
    prenom_fr: "MAISSOUNE",
    nom_ar: "زعطوط",
    prenom_ar: "ميسون",
    lieu_naissance: "ورقلة",
    date_naissance: "01/10/2005",
    moyenne_bac: "10.87"
  },
  {
    matricule: "39326110",
    nom_fr: "FELLAHI",
    prenom_fr: "ICHRAK",
    nom_ar: "فلاحي",
    prenom_ar: "اشراق",
    lieu_naissance: "ورقلة",
    date_naissance: "09/10/2006",
    moyenne_bac: "10.71"
  },
  {
    matricule: "39600805",
    nom_fr: "OUMAYA",
    prenom_fr: "ATKA",
    nom_ar: "أوماية",
    prenom_ar: "عاتكة",
    lieu_naissance: "عين البيضاء",
    date_naissance: "16/12/2003",
    moyenne_bac: "10.39"
  },
  {
    matricule: "39327815",
    nom_fr: "MEZOUAR",
    prenom_fr: "YASSMINE",
    nom_ar: "مزوار",
    prenom_ar: "ياسمين",
    lieu_naissance: "ورقلة",
    date_naissance: "21/10/2006",
    moyenne_bac: "13.03"
  },
  {
    matricule: "39603610",
    nom_fr: "BENDJERIOU",
    prenom_fr: "YOUSRA",
    nom_ar: "بن جريو",
    prenom_ar: "يسرى",
    lieu_naissance: "تبسبست",
    date_naissance: "03/09/2005",
    moyenne_bac: "13.2"
  },
  {
    matricule: "39368001",
    nom_fr: "NEDJAR",
    prenom_fr: "AICHA",
    nom_ar: "نجار",
    prenom_ar: "عائشة",
    lieu_naissance: "غرداية",
    date_naissance: "01/03/2005",
    moyenne_bac: "12.69"
  },
  {
    matricule: "39368904",
    nom_fr: "BELALEM",
    prenom_fr: "FARAH",
    nom_ar: "بلعالم",
    prenom_ar: "فرح",
    lieu_naissance: "تقرت",
    date_naissance: "29/11/2003",
    moyenne_bac: "14.6"
  },
  {
    matricule: "39364910",
    nom_fr: "REDOUANI",
    prenom_fr: "ASMA",
    nom_ar: "رضواني",
    prenom_ar: "أسماء",
    lieu_naissance: "Ouargla",
    date_naissance: "06/09/2005",
    moyenne_bac: "13.1"
  },
  {
    matricule: "39608506",
    nom_fr: "BETTAYEB",
    prenom_fr: "KHADIDJA",
    nom_ar: "بالطيب",
    prenom_ar: "خديجة",
    lieu_naissance: "El hadjira - Ouargla",
    date_naissance: "06/09/2004",
    moyenne_bac: "12.88"
  },
  {
    matricule: "39367401",
    nom_fr: "GOUARAH",
    prenom_fr: "SALIMA",
    nom_ar: "قوارح",
    prenom_ar: "سليمة",
    lieu_naissance: "ورقلة",
    date_naissance: "30/08/2004",
    moyenne_bac: "11.53"
  },
  {
    matricule: "39536013",
    nom_fr: "MESSAOUDI",
    prenom_fr: "ASMA",
    nom_ar: "مسعودي",
    prenom_ar: "أسماء",
    lieu_naissance: "برج الكيفان",
    date_naissance: "13/01/2006",
    moyenne_bac: "12.02"
  },
  {
    matricule: "39346005",
    nom_fr: "YOUSFI",
    prenom_fr: "HADIL FATMA ZOHRA",
    nom_ar: "يوسفي",
    prenom_ar: "هديل فاطمة الزهرة",
    lieu_naissance: "سيدي خالد",
    date_naissance: "17/08/2003",
    moyenne_bac: "10.71"
  },
  {
    matricule: "39303912",
    nom_fr: "GHOBCHI",
    prenom_fr: "IMANE",
    nom_ar: "غبشي",
    prenom_ar: "ايمان",
    lieu_naissance: "ورقلة",
    date_naissance: "07/01/2005",
    moyenne_bac: "10.51"
  },
  {
    matricule: "39344408",
    nom_fr: "GHETTAS",
    prenom_fr: "CHOUROUK",
    nom_ar: "غطاس",
    prenom_ar: "شروق",
    lieu_naissance: "حاسي مسعود",
    date_naissance: "15/07/2004",
    moyenne_bac: "12.75"
  },
  {
    matricule: "39344120",
    nom_fr: "KAHLAOUI",
    prenom_fr: "KHADIDJA",
    nom_ar: "كحلاوي",
    prenom_ar: "خديجة",
    lieu_naissance: "حاسي مسعود",
    date_naissance: "13/04/2003",
    moyenne_bac: "9.52"
  },
  {
    matricule: "39338218",
    nom_fr: "TIDJANI",
    prenom_fr: "MALAK",
    nom_ar: "التجاني",
    prenom_ar: "ملاك",
    lieu_naissance: "المقارين",
    date_naissance: "25/07/2003",
    moyenne_bac: "9.53"
  },
  {
    matricule: "39544009",
    nom_fr: "KERBOUSSA",
    prenom_fr: "WISSAM",
    nom_ar: "كربوسه",
    prenom_ar: "وسام",
    lieu_naissance: "المقارين",
    date_naissance: "31/08/2005",
    moyenne_bac: "10.61"
  },
  {
    matricule: "39543120",
    nom_fr: "KERBOUSSA",
    prenom_fr: "IBTISSEM",
    nom_ar: "كربوسه",
    prenom_ar: "ابتسام",
    lieu_naissance: "المقارين",
    date_naissance: "19/06/2005",
    moyenne_bac: "12.57"
  },
  {
    matricule: "39530106",
    nom_fr: "HADJOUDJ",
    prenom_fr: "AYAT MESSAOUDA",
    nom_ar: "حجوج",
    prenom_ar: "آيات مسعودة",
    lieu_naissance: "تقرت",
    date_naissance: "27/02/2005",
    moyenne_bac: "10.93"
  },
  {
    matricule: "39547907",
    nom_fr: "FODHILI",
    prenom_fr: "MOHAMED ABDELMOUMENE",
    nom_ar: "فضيلي",
    prenom_ar: "محمد عبد المؤمن",
    lieu_naissance: "Kouba",
    date_naissance: "23/01/2005",
    moyenne_bac: "12.08"
  },
  {
    matricule: "39524413",
    nom_fr: "SERDOUK",
    prenom_fr: "DJAD ELHAK",
    nom_ar: "سردوك",
    prenom_ar: "جاد الحق",
    lieu_naissance: "النزلة",
    date_naissance: "15/05/2003",
    moyenne_bac: "10.27"
  },
  {
    matricule: "39547111",
    nom_fr: "BELMOSTEFA",
    prenom_fr: "CHAIMA",
    nom_ar: "بالمصطفى",
    prenom_ar: "شيماء",
    lieu_naissance: "الطيبات",
    date_naissance: "30/05/2004",
    moyenne_bac: "11.32"
  },
  {
    matricule: "39304818",
    nom_fr: "BAAMEUR",
    prenom_fr: "MAROUA",
    nom_ar: "باعمر",
    prenom_ar: "مروة",
    lieu_naissance: "ورقلة",
    date_naissance: "26/10/2005",
    moyenne_bac: "10.39"
  },
  {
    matricule: "39573219",
    nom_fr: "FAROUROU",
    prenom_fr: "RAYANE",
    nom_ar: "فارورو",
    prenom_ar: "ريان",
    lieu_naissance: "تملاحت",
    date_naissance: "31/03/2006",
    moyenne_bac: "11.53"
  },
  {
    matricule: "39585904",
    nom_fr: "ABIDLI",
    prenom_fr: "SOUHILA",
    nom_ar: "عبيدلي",
    prenom_ar: "سهيلة",
    lieu_naissance: "العالية",
    date_naissance: "04/10/2005",
    moyenne_bac: "10.2"
  },
  {
    matricule: "39515107",
    nom_fr: "LEHELLA",
    prenom_fr: "SALSABIL",
    nom_ar: "الهلة",
    prenom_ar: "سلسبيل",
    lieu_naissance: "زلفانة",
    date_naissance: "26/09/2006",
    moyenne_bac: "12.51"
  },
  {
    matricule: "39321803",
    nom_fr: "CHERIFI",
    prenom_fr: "HIBA",
    nom_ar: "شريفي",
    prenom_ar: "هبة",
    lieu_naissance: "ورقلة",
    date_naissance: "03/10/2005",
    moyenne_bac: "12.06"
  },
  {
    matricule: "39326820",
    nom_fr: "BOUKHATEM",
    prenom_fr: "MOHAMMED",
    nom_ar: "بوخاتم",
    prenom_ar: "محمد",
    lieu_naissance: "ورقلة",
    date_naissance: "22/03/2006",
    moyenne_bac: "13.85"
  },
  {
    matricule: "39331903",
    nom_fr: "DRIOUECHE",
    prenom_fr: "RABAB",
    nom_ar: "دريوش",
    prenom_ar: "رباب",
    lieu_naissance: "البليدة",
    date_naissance: "21/04/2005",
    moyenne_bac: "11.01"
  },
  {
    matricule: "39638212",
    nom_fr: "SLIMANI",
    prenom_fr: "IKHLAS",
    nom_ar: "سليماني",
    prenom_ar: "إخلاص",
    lieu_naissance: "جامعة",
    date_naissance: "28/04/2004",
    moyenne_bac: "12.52"
  },
  {
    matricule: "39530805",
    nom_fr: "ZIARA",
    prenom_fr: "DJANNAT",
    nom_ar: "زيارة",
    prenom_ar: "جنات",
    lieu_naissance: "تبسبست",
    date_naissance: "25/11/2005",
    moyenne_bac: "10.36"
  },
  {
    matricule: "39370401",
    nom_fr: "SELMI",
    prenom_fr: "MARIAM",
    nom_ar: "سلمي",
    prenom_ar: "مريم",
    lieu_naissance: "الرويسات",
    date_naissance: "04/02/2006",
    moyenne_bac: "12.48"
  },
  {
    matricule: "39569412",
    nom_fr: "BEN AHMED",
    prenom_fr: "CHAIMA",
    nom_ar: "بن أحمد",
    prenom_ar: "شيماء",
    lieu_naissance: "بونورة",
    date_naissance: "10/09/2006",
    moyenne_bac: "10.57"
  },
  {
    matricule: "39569509",
    nom_fr: "BASSA",
    prenom_fr: "AICHA",
    nom_ar: "باسه",
    prenom_ar: "عائشة",
    lieu_naissance: "تقرت",
    date_naissance: "18/12/2006",
    moyenne_bac: "11.85"
  },
  {
    matricule: "39602619",
    nom_fr: "KEMARI",
    prenom_fr: "MOUNA",
    nom_ar: "قماري",
    prenom_ar: "منى",
    lieu_naissance: "النزلة",
    date_naissance: "09/01/2005",
    moyenne_bac: "13.22"
  },
  {
    matricule: "39327205",
    nom_fr: "SOUICI",
    prenom_fr: "NESRINE",
    nom_ar: "سويسي",
    prenom_ar: "نسرين",
    lieu_naissance: "ورقلة",
    date_naissance: "02/03/2005",
    moyenne_bac: "11.68"
  },
  {
    matricule: "39580705",
    nom_fr: "KHADIR",
    prenom_fr: "LATIFA",
    nom_ar: "الخذير",
    prenom_ar: "لطيفة",
    lieu_naissance: "حاسي خليفة",
    date_naissance: "27/09/2006",
    moyenne_bac: "12.48"
  },
  {
    matricule: "39057376",
    nom_fr: "GOHMES",
    prenom_fr: "NADJAT",
    nom_ar: "قحمص",
    prenom_ar: "نجاة",
    lieu_naissance: "الطيبات",
    date_naissance: "03/03/1996",
    moyenne_bac: "11.27"
  },
  {
    matricule: "39327807",
    nom_fr: "BOUHAFS",
    prenom_fr: "HANINE",
    nom_ar: "بوحفص",
    prenom_ar: "حنين",
    lieu_naissance: "تبسبست",
    date_naissance: "01/06/2004",
    moyenne_bac: "15.76"
  },
  {
    matricule: "39053824",
    nom_fr: "BENATALLAH",
    prenom_fr: "YOUSSOUF",
    nom_ar: "بن عطاء الله",
    prenom_ar: "يوسف",
    lieu_naissance: "El Hadjira -Ouargla",
    date_naissance: "16/09/2001",
    moyenne_bac: "11.53"
  },
  {
    matricule: "39531206",
    nom_fr: "DEGLA",
    prenom_fr: "SACIA",
    nom_ar: "دقلة",
    prenom_ar: "ساسية",
    lieu_naissance: "بني أسود",
    date_naissance: "27/01/2004",
    moyenne_bac: "12.67"
  },
  {
    matricule: "424637",
    nom_fr: "CHELAGHMA",
    prenom_fr: "DALILA",
    nom_ar: "شلاغمة",
    prenom_ar: "دليلة",
    lieu_naissance: "Ain Touta - Batena",
    date_naissance: "04/09/1982",
    moyenne_bac: "10.41"
  }
];
