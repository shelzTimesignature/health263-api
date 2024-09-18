// import type { HttpContext } from '@adonisjs/core/http'

import HighBreedClaimsController from '#controllers/high_breed_claims_controller'

export default class TestsController {
  claim = new HighBreedClaimsController()

  async post() {
    const data = JSON.parse(`[
      {
        "No": "CEFT208PP",
        "TariffCode": "02551",
        "NappiCode": "20305",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "CEFTRIAXONE 1G",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 300,
        "UnitPrice": 3,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "METR717PP",
        "TariffCode": "02551",
        "NappiCode": "20682",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "METRONIDAZOLE 500MG INJECTION",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 600,
        "UnitPrice": 3,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "PARA847PP",
        "TariffCode": "02551",
        "NappiCode": "003091",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "PARACETAMOL IV 10MG/ML 100ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 300,
        "Amount": 900,
        "UnitPrice": 3,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SYRI1263PP",
        "TariffCode": "02561",
        "NappiCode": "605270",
        "GroupDescription": "Ward Sundries",
        "Description": "SYRINGE 10ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 1000,
        "Amount": 310,
        "UnitPrice": 0.31,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "NEED776PP",
        "TariffCode": "02561",
        "NappiCode": "607805",
        "GroupDescription": "Ward Sundries",
        "Description": "NEEDLE 19G",
        "EpisodeID": "STPA00138111",
        "Quantity": 1000,
        "Amount": 100,
        "UnitPrice": 0.1,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "LINE670PP",
        "TariffCode": "02561",
        "NappiCode": "608535",
        "GroupDescription": "Ward Sundries",
        "Description": "LINEN SAVERS",
        "EpisodeID": "STPA00138111",
        "Quantity": 1000,
        "Amount": 1000,
        "UnitPrice": 1,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "COTT288PP",
        "TariffCode": "02561",
        "NappiCode": "607600",
        "GroupDescription": "Ward Sundries",
        "Description": "COTTON WOOL 500G",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 800,
        "UnitPrice": 8,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SYRI1264PP",
        "TariffCode": "02561",
        "NappiCode": "605300",
        "GroupDescription": "Ward Sundries",
        "Description": "SYRINGE 1ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 1000,
        "Amount": 250,
        "UnitPrice": 0.25,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "LATE659PP",
        "TariffCode": "02561",
        "NappiCode": "608700",
        "GroupDescription": "Ward Sundries",
        "Description": "LATEX GLOVES MEDIUM",
        "EpisodeID": "STPA00138111",
        "Quantity": 10000,
        "Amount": 750,
        "UnitPrice": 0.075,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "RING954PP",
        "TariffCode": "02561",
        "NappiCode": "35266",
        "GroupDescription": "Ward Sundries",
        "Description": "RINGER LACTATE 1L",
        "EpisodeID": "STPA00138111",
        "Quantity": 400,
        "Amount": 2000,
        "UnitPrice": 5,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "BURE173PP",
        "TariffCode": "02561",
        "NappiCode": "BURE173PP",
        "GroupDescription": "Ward Sundries",
        "Description": "BURETTROL 150ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 500,
        "UnitPrice": 5,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SYRI1267PP",
        "TariffCode": "02561",
        "NappiCode": "605295",
        "GroupDescription": "Ward Sundries",
        "Description": "SYRINGE 50ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 200,
        "UnitPrice": 1,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "CANN192PP",
        "TariffCode": "02561",
        "NappiCode": "607380",
        "GroupDescription": "Ward Sundries",
        "Description": "CANNULA 24G",
        "EpisodeID": "STPA00138111",
        "Quantity": 300,
        "Amount": 300,
        "UnitPrice": 1,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "CANN191PP",
        "TariffCode": "02561",
        "NappiCode": "607380",
        "GroupDescription": "Ward Sundries",
        "Description": "CANNULA 22G",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 200,
        "UnitPrice": 1,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "TEGA1281PP",
        "TariffCode": "02561",
        "NappiCode": "609850",
        "GroupDescription": "Ward Sundries",
        "Description": "TEGADERM 1623 (6*7CM)",
        "EpisodeID": "STPA00138111",
        "Quantity": 300,
        "Amount": 450,
        "UnitPrice": 1.5,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "CREP294PP",
        "TariffCode": "02561",
        "NappiCode": "607620",
        "GroupDescription": "Ward Sundries",
        "Description": "CREPE 50MM",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 200,
        "UnitPrice": 2,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "PARA847PP",
        "TariffCode": "02551",
        "NappiCode": "003091",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "PARACETAMOL IV 10MG/ML 100ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 600,
        "UnitPrice": 3,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "CEFT208PP",
        "TariffCode": "02551",
        "NappiCode": "20305",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "CEFTRIAXONE 1G",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 600,
        "UnitPrice": 3,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "METR717PP",
        "TariffCode": "02551",
        "NappiCode": "20682",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "METRONIDAZOLE 500MG INJECTION",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 300,
        "UnitPrice": 3,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "DEXT320PP",
        "TariffCode": "02561",
        "NappiCode": "35272",
        "GroupDescription": "Ward Sundries",
        "Description": "DEXTROSE 50% 50ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 1200,
        "UnitPrice": 6,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "NORM804PP",
        "TariffCode": "02561",
        "NappiCode": "35081",
        "GroupDescription": "Ward Sundries",
        "Description": "NORMAL SALINE 0.9% 1L",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 500,
        "UnitPrice": 5,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "RING954PP",
        "TariffCode": "02561",
        "NappiCode": "35266",
        "GroupDescription": "Ward Sundries",
        "Description": "RINGER LACTATE 1L",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 500,
        "UnitPrice": 5,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "COSM278PP",
        "TariffCode": "02561",
        "NappiCode": "626690",
        "GroupDescription": "Ward Sundries",
        "Description": "COSMOPORE 10 X25CM",
        "EpisodeID": "STPA00138111",
        "Quantity": 300,
        "Amount": 900,
        "UnitPrice": 3,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "IBUP588PP",
        "TariffCode": "02551",
        "NappiCode": "3002",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "IBUPROFEN 200MG TABS",
        "EpisodeID": "STPA00138111",
        "Quantity": 4200,
        "Amount": 378,
        "UnitPrice": 0.09,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "FENT451PP",
        "TariffCode": "02559",
        "NappiCode": "2484",
        "GroupDescription": "Theatre Drugs",
        "Description": "FENTANYL 100MCG/2ML INJ",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 500,
        "UnitPrice": 5,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "02065",
        "TariffCode": "02065",
        "NappiCode": "",
        "GroupDescription": "PAEDIATRIC WARD PER DAY",
        "Description": "PAEDIATRIC WARD PER DAY",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 13951,
        "UnitPrice": 139.51,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "02065",
        "TariffCode": "02065",
        "NappiCode": "",
        "GroupDescription": "PAEDIATRIC WARD PER DAY",
        "Description": "PAEDIATRIC WARD PER DAY",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 13951,
        "UnitPrice": 139.51,
        "PostingDate": "2024-09-15",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "ADCO021PP",
        "TariffCode": "02551",
        "NappiCode": "600350",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "ADCO FOSENEMA 150ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 2500,
        "UnitPrice": 25,
        "PostingDate": "2024-09-16",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "CEFT208PP",
        "TariffCode": "02551",
        "NappiCode": "20305",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "CEFTRIAXONE 1G",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 300,
        "UnitPrice": 3,
        "PostingDate": "2024-09-16",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "METR717PP",
        "TariffCode": "02551",
        "NappiCode": "20682",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "METRONIDAZOLE 500MG INJECTION",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 600,
        "UnitPrice": 3,
        "PostingDate": "2024-09-16",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "PARA847PP",
        "TariffCode": "02551",
        "NappiCode": "003091",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "PARACETAMOL IV 10MG/ML 100ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 600,
        "UnitPrice": 3,
        "PostingDate": "2024-09-16",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SYRI1263PP",
        "TariffCode": "02561",
        "NappiCode": "605270",
        "GroupDescription": "Ward Sundries",
        "Description": "SYRINGE 10ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 1000,
        "Amount": 310,
        "UnitPrice": 0.31,
        "PostingDate": "2024-09-16",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SUXA1262PP",
        "TariffCode": "02559",
        "NappiCode": "17001",
        "GroupDescription": "Theatre Drugs",
        "Description": "SUXAMETHONIUM CHLORIDE 100MG/2",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 600,
        "UnitPrice": 6,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "ATRA093PP",
        "TariffCode": "02559",
        "NappiCode": "017013",
        "GroupDescription": "Theatre Drugs",
        "Description": "ATRACURIUM 2.5ML INJ 25MG/ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 1200,
        "UnitPrice": 12,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "ATRO095PP",
        "TariffCode": "02559",
        "NappiCode": "2166",
        "GroupDescription": "Theatre Drugs",
        "Description": "ATROPINE 1MG/ML 1MG/ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 600,
        "UnitPrice": 3,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "NEOS783PP",
        "TariffCode": "02559",
        "NappiCode": "5410",
        "GroupDescription": "Theatre Drugs",
        "Description": "NEOSTIGMINE 2.5MG/ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 300,
        "UnitPrice": 3,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "PROP921PP",
        "TariffCode": "02559",
        "NappiCode": "2309",
        "GroupDescription": "Theatre Drugs",
        "Description": "PROPOFOL 1% 20ML 10MG/ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 400,
        "UnitPrice": 4,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "LIGN668PP",
        "TariffCode": "02569",
        "NappiCode": "004017",
        "GroupDescription": "Theatre Sundries",
        "Description": "LIGNOCAINE 2% 2%",
        "EpisodeID": "STPA00138111",
        "Quantity": 50,
        "Amount": 400,
        "UnitPrice": 8,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "WATE1412PP",
        "TariffCode": "02569",
        "NappiCode": "610235",
        "GroupDescription": "Theatre Sundries",
        "Description": "WATER FOR INJECTION 10MLS",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 100,
        "UnitPrice": 0.5,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "METR717PP",
        "TariffCode": "02559",
        "NappiCode": "20682",
        "GroupDescription": "Theatre Drugs",
        "Description": "METRONIDAZOLE 500MG INJECTION",
        "EpisodeID": "STPA00138111",
        "Quantity": 0,
        "Amount": 0,
        "UnitPrice": 3,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "CEFT208PP",
        "TariffCode": "02559",
        "NappiCode": "20305",
        "GroupDescription": "Theatre Drugs",
        "Description": "CEFTRIAXONE 1G",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 300,
        "UnitPrice": 3,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "RING954PP",
        "TariffCode": "02569",
        "NappiCode": "35266",
        "GroupDescription": "Theatre Sundries",
        "Description": "RINGER LACTATE 1L",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 500,
        "UnitPrice": 5,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "STER1036PP",
        "TariffCode": "02569",
        "NappiCode": "35094",
        "GroupDescription": "Theatre Sundries",
        "Description": "STERILE WATER 1000ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 300,
        "Amount": 1500,
        "UnitPrice": 5,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "PARA847PP",
        "TariffCode": "02559",
        "NappiCode": "003091",
        "GroupDescription": "Theatre Drugs",
        "Description": "PARACETAMOL IV 10MG/ML 100ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 0,
        "Amount": 0,
        "UnitPrice": 3,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "METO712PP",
        "TariffCode": "02559",
        "NappiCode": "11344",
        "GroupDescription": "Theatre Drugs",
        "Description": "METOCLOPRAMIDE INJ 10MG/2ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 350,
        "UnitPrice": 3.5,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "ONDA822PP",
        "TariffCode": "02559",
        "NappiCode": "005160",
        "GroupDescription": "Theatre Drugs",
        "Description": "ONDANSTERON INJ 4MG/2ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 800,
        "UnitPrice": 4,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "DEXA315PP",
        "TariffCode": "02559",
        "NappiCode": "21175",
        "GroupDescription": "Theatre Drugs",
        "Description": "DEXAMETHASONE 8MG/2ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 300,
        "UnitPrice": 3,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SYRI1266PP",
        "TariffCode": "02569",
        "NappiCode": "605280",
        "GroupDescription": "Theatre Sundries",
        "Description": "SYRINGE 2ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 400,
        "Amount": 60,
        "UnitPrice": 0.15,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SYRI1268PP",
        "TariffCode": "02569",
        "NappiCode": "605290",
        "GroupDescription": "Theatre Sundries",
        "Description": "SYRINGE 5ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 500,
        "Amount": 75,
        "UnitPrice": 0.15,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SYRI1263PP",
        "TariffCode": "02569",
        "NappiCode": "605270",
        "GroupDescription": "Theatre Sundries",
        "Description": "SYRINGE 10ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 500,
        "Amount": 155,
        "UnitPrice": 0.31,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SYRI1265PP",
        "TariffCode": "02569",
        "NappiCode": "605275",
        "GroupDescription": "Theatre Sundries",
        "Description": "SYRINGE 20ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 300,
        "Amount": 75,
        "UnitPrice": 0.25,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "NEED776PP",
        "TariffCode": "02569",
        "NappiCode": "607805",
        "GroupDescription": "Theatre Sundries",
        "Description": "NEEDLE 19G",
        "EpisodeID": "STPA00138111",
        "Quantity": 500,
        "Amount": 50,
        "UnitPrice": 0.1,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "NEED777PP",
        "TariffCode": "02569",
        "NappiCode": "607810",
        "GroupDescription": "Theatre Sundries",
        "Description": "NEEDLE 21G",
        "EpisodeID": "STPA00138111",
        "Quantity": 500,
        "Amount": 50,
        "UnitPrice": 0.1,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "NEED778PP",
        "TariffCode": "02569",
        "NappiCode": "607815",
        "GroupDescription": "Theatre Sundries",
        "Description": "NEEDLE 23G",
        "EpisodeID": "STPA00138111",
        "Quantity": 500,
        "Amount": 50,
        "UnitPrice": 0.1,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "GAUZ512PP",
        "TariffCode": "02569",
        "NappiCode": "608390",
        "GroupDescription": "Theatre Sundries",
        "Description": "GAUZE SWAB 100MM 10CM X 10CM",
        "EpisodeID": "STPA00138111",
        "Quantity": 2500,
        "Amount": 375,
        "UnitPrice": 0.15,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "ISOP627PP",
        "TariffCode": "02559",
        "NappiCode": "608565",
        "GroupDescription": "Theatre Drugs",
        "Description": "ISOPROPYL ALCHOHOL",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 2000,
        "UnitPrice": 20,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "LATE659PP",
        "TariffCode": "02569",
        "NappiCode": "608700",
        "GroupDescription": "Theatre Sundries",
        "Description": "LATEX GLOVES MEDIUM",
        "EpisodeID": "STPA00138111",
        "Quantity": 10000,
        "Amount": 750,
        "UnitPrice": 0.075,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "LINE670PP",
        "TariffCode": "02569",
        "NappiCode": "608535",
        "GroupDescription": "Theatre Sundries",
        "Description": "LINEN SAVERS",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 200,
        "UnitPrice": 1,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "HME 566PP",
        "TariffCode": "02569",
        "NappiCode": "607030",
        "GroupDescription": "Theatre Sundries",
        "Description": "HME BACTERIAL FILTER ADULT H79",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 1200,
        "UnitPrice": 12,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "ALCO030PP",
        "TariffCode": "02569",
        "NappiCode": "610245",
        "GroupDescription": "Theatre Sundries",
        "Description": "ALCOHOL SWABS",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 100,
        "UnitPrice": 0.5,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "GLUC532PP",
        "TariffCode": "02569",
        "NappiCode": "610110",
        "GroupDescription": "Theatre Sundries",
        "Description": "Glucostrips Caresens",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 50,
        "UnitPrice": 0.5,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SUTU1136PP",
        "TariffCode": "02569",
        "NappiCode": "SUTU1136PP",
        "GroupDescription": "Theatre Sundries",
        "Description": "SUTURE 1 PDS CUTTING 40MM",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 800,
        "UnitPrice": 8,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SUTU1182PP",
        "TariffCode": "02569",
        "NappiCode": "SUTU1182PP",
        "GroupDescription": "Theatre Sundries",
        "Description": "SUTURE 2/0 VICRYL ROUND 26 MM",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 500,
        "UnitPrice": 5,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SUTU1193PP",
        "TariffCode": "02569",
        "NappiCode": "SUTU1193PP",
        "GroupDescription": "Theatre Sundries",
        "Description": "SUTURE 3/0 MONOCRYL CUTTING 26",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 800,
        "UnitPrice": 8,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "FLUI463PP",
        "TariffCode": "02569",
        "NappiCode": "13291",
        "GroupDescription": "Theatre Sundries",
        "Description": "FLUID GIVING SET PEADS",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 200,
        "UnitPrice": 2,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "TEGA1281PP",
        "TariffCode": "02569",
        "NappiCode": "609850",
        "GroupDescription": "Theatre Sundries",
        "Description": "TEGADERM 1623 (6*7CM)",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 150,
        "UnitPrice": 1.5,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "BURE173PP",
        "TariffCode": "02569",
        "NappiCode": "BURE173PP",
        "GroupDescription": "Theatre Sundries",
        "Description": "BURETTROL 150ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 500,
        "UnitPrice": 5,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "LUBR680PP",
        "TariffCode": "02569",
        "NappiCode": "LUBR680PP",
        "GroupDescription": "Theatre Sundries",
        "Description": "LUBRICATING GEL IML",
        "EpisodeID": "STPA00138111",
        "Quantity": 2000,
        "Amount": 260,
        "UnitPrice": 0.13,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SURG1098PP",
        "TariffCode": "02569",
        "NappiCode": "609770",
        "GroupDescription": "Theatre Sundries",
        "Description": "SURGICAL FACE MASKS",
        "EpisodeID": "STPA00138111",
        "Quantity": 700,
        "Amount": 35,
        "UnitPrice": 0.05,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "THEA1290PP",
        "TariffCode": "02569",
        "NappiCode": "609890",
        "GroupDescription": "Theatre Sundries",
        "Description": "THEATRE CAPS",
        "EpisodeID": "STPA00138111",
        "Quantity": 700,
        "Amount": 56,
        "UnitPrice": 0.08,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SURG1091PP",
        "TariffCode": "02569",
        "NappiCode": "603325",
        "GroupDescription": "Theatre Sundries",
        "Description": "SURGICAL BLADE (SM) 15G",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 100,
        "UnitPrice": 1,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "ANAE052PP",
        "TariffCode": "02569",
        "NappiCode": "ANAE052PP",
        "GroupDescription": "Theatre Sundries",
        "Description": "ANAESTHETIC FACE MASK 4",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 700,
        "UnitPrice": 7,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "TROC1341PP",
        "TariffCode": "02569",
        "NappiCode": "TROC1341PP",
        "GroupDescription": "Theatre Sundries",
        "Description": "TROCAR DISAPOSABLE 5MM",
        "EpisodeID": "STPA00138111",
        "Quantity": 200,
        "Amount": 20000,
        "UnitPrice": 100,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "TROC1342PP",
        "TariffCode": "02569",
        "NappiCode": "TROC1342PP",
        "GroupDescription": "Theatre Sundries",
        "Description": "TROCAR DISPOSABLE 10.5MM",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 10000,
        "UnitPrice": 100,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "ENDO370PP",
        "TariffCode": "02569",
        "NappiCode": "607720",
        "GroupDescription": "Theatre Sundries",
        "Description": "ENDO SCISSORS (RE USABLE )",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 10000,
        "UnitPrice": 100,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "COSM280PP",
        "TariffCode": "02569",
        "NappiCode": "626694",
        "GroupDescription": "Theatre Sundries",
        "Description": "COSMOPORE 5 X 7.2CM",
        "EpisodeID": "STPA00138111",
        "Quantity": 300,
        "Amount": 300,
        "UnitPrice": 1,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "INAD599PP",
        "TariffCode": "02559",
        "NappiCode": "608525",
        "GroupDescription": "Theatre Drugs",
        "Description": "INADENE DRESSING 10CM*10CM",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 700,
        "UnitPrice": 7,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "ETT 402PP",
        "TariffCode": "02569",
        "NappiCode": "608060",
        "GroupDescription": "Theatre Sundries",
        "Description": "ETT CUFFED 5.0",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 300,
        "UnitPrice": 3,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "ECG 352PP",
        "TariffCode": "02569",
        "NappiCode": "6870",
        "GroupDescription": "Theatre Sundries",
        "Description": "ECG ELECTRODES PEADS",
        "EpisodeID": "STPA00138111",
        "Quantity": 300,
        "Amount": 150,
        "UnitPrice": 0.5,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "YANK1418PP",
        "TariffCode": "02569",
        "NappiCode": "610320",
        "GroupDescription": "Theatre Sundries",
        "Description": "YANKUER SUCKER",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 1000,
        "UnitPrice": 10,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SURG1099PP",
        "TariffCode": "02569",
        "NappiCode": "605320",
        "GroupDescription": "Theatre Sundries",
        "Description": "SURGICAL GLOVE 7.0",
        "EpisodeID": "STPA00138111",
        "Quantity": 400,
        "Amount": 800,
        "UnitPrice": 2,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "SURG1100PP",
        "TariffCode": "02569",
        "NappiCode": "605330",
        "GroupDescription": "Theatre Sundries",
        "Description": "SURGICAL GLOVE 7.5",
        "EpisodeID": "STPA00138111",
        "Quantity": 500,
        "Amount": 500,
        "UnitPrice": 1,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "02065",
        "TariffCode": "02065",
        "NappiCode": "",
        "GroupDescription": "PAEDIATRIC WARD PER DAY",
        "Description": "PAEDIATRIC WARD PER DAY",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 13951,
        "UnitPrice": 139.51,
        "PostingDate": "2024-09-16",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "AMOX048PP",
        "TariffCode": "02551",
        "NappiCode": "20611",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "AMOXYCILLIN 500MG",
        "EpisodeID": "STPA00138111",
        "Quantity": 2100,
        "Amount": 210,
        "UnitPrice": 0.1,
        "PostingDate": "2024-09-17",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "METR716PP",
        "TariffCode": "02551",
        "NappiCode": "20407",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "METRONIDAZOLE 400MG TABLET",
        "EpisodeID": "STPA00138111",
        "Quantity": 2100,
        "Amount": 210,
        "UnitPrice": 0.1,
        "PostingDate": "2024-09-17",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "VARI1395PP",
        "TariffCode": "02551",
        "NappiCode": "2230",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "VARIGESIC TABLET",
        "EpisodeID": "STPA00138111",
        "Quantity": 2100,
        "Amount": 357,
        "UnitPrice": 0.17,
        "PostingDate": "2024-09-17",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "PARA846PP",
        "TariffCode": "02551",
        "NappiCode": "2115",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "PARACETAMOL (CAPS) 500MG",
        "EpisodeID": "STPA00138111",
        "Quantity": 2800,
        "Amount": 56,
        "UnitPrice": 0.02,
        "PostingDate": "2024-09-17",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "MUPI742PP",
        "TariffCode": "02551",
        "NappiCode": "13390",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "MUPIROCIN OITMENT",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 700,
        "UnitPrice": 7,
        "PostingDate": "2024-09-17",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "02303",
        "TariffCode": "02303",
        "NappiCode": "",
        "GroupDescription": "BASIC FEE FOR ALL OPERATING TIMES- G.A. PER OP",
        "Description": "BASIC FEE FOR ALL OPERATING TIMES- G.A. PER OP",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 16043,
        "UnitPrice": 160.43,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "02316",
        "TariffCode": "02316",
        "NappiCode": "",
        "GroupDescription": "Recovery Room",
        "Description": "Recovery Room",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 2000,
        "UnitPrice": 20,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "02306",
        "TariffCode": "02306",
        "NappiCode": "",
        "GroupDescription": "OT Time GA Per Minute",
        "Description": "OT Time GA Per Min",
        "EpisodeID": "STPA00138111",
        "Quantity": 11500,
        "Amount": 40135,
        "UnitPrice": 3.49,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "02364",
        "TariffCode": "02364",
        "NappiCode": "",
        "GroupDescription": "ISOFLUORANE PER MINUTE",
        "Description": "ISOFLUORANE PER MINUTE",
        "EpisodeID": "STPA00138111",
        "Quantity": 11500,
        "Amount": 13340,
        "UnitPrice": 1.16,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "02361",
        "TariffCode": "02361",
        "NappiCode": "",
        "GroupDescription": "GASES PER MINUTE (EXCL.O2)",
        "Description": "GASES PER MINUTE (EXCL.O2)",
        "EpisodeID": "STPA00138111",
        "Quantity": 11500,
        "Amount": 2300,
        "UnitPrice": 0.2,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "02412",
        "TariffCode": "02412",
        "NappiCode": "",
        "GroupDescription": "Flaxable Optic Scope",
        "Description": "Flaxable Optic Scope (TV and Camera)",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 10696,
        "UnitPrice": 106.96,
        "PostingDate": "2024-09-14",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "PETH862PP",
        "TariffCode": "02551",
        "NappiCode": "002030",
        "GroupDescription": "Pharmacy Drugs",
        "Description": "PETHIDINE 100MG/2ML",
        "EpisodeID": "STPA00138111",
        "Quantity": 300,
        "Amount": 1050,
        "UnitPrice": 3.5,
        "PostingDate": "2024-09-16",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "36410",
        "TariffCode": "36410",
        "NappiCode": "",
        "GroupDescription": "CANNULATION",
        "Description": "CANNULATION              ",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 1200,
        "UnitPrice": 12,
        "PostingDate": "2024-09-16",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      },
      {
        "No": "36400",
        "TariffCode": "36400",
        "NappiCode": "",
        "GroupDescription": "VENEPUNCTURE-COMPLEX OR NON-ROUTINE -INFANT UNDER",
        "Description": "VENEPUNCTURE COMPLEX OR NON-ROUTINE INFANT UNDER ",
        "EpisodeID": "STPA00138111",
        "Quantity": 100,
        "Amount": 720,
        "UnitPrice": 7.2,
        "PostingDate": "2024-09-16",
        "DischargeDate": "20240917123944",
        "AdmissionDate": "20240914200828",
        "Diagnosis": [
          {
            "Code": "R10.4"
          }
        ]
      }
    ]`)

    const availableSales = data.filter((x: any) => x.Quantity > 0)

    const sales = this.claim.getUnitProducts(availableSales)
    return sales
  }

  getTotalItem(sales: any) {
    let totalConsumables = 0
    let totalServices = sales.length

    for (let s of sales) {
      totalConsumables += s.SalesLine.length
    }

    return {
      totalServices,
      totalConsumables,
      sales,
    }
  }
}
