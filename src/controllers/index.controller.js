import Oferta from "../models/Oferta.js";


export const renderIndex = async (req, res) => {
  // const ultimasOfertas = await Oferta.find().sort({ createdAt: -1 }).limit(5).lean();
  const today = new Date();
  const ultimasOfertas = await Oferta.aggregate(
   [
    {
      // añado la referencia a pr 41, mientras la web esté orientada a lo más local.
      '$match': {
        'PR': {
          $in: ["41"]
        },
        'deadline_application': { 
          $gt: new Date(today)
        }
      }
    }, {
      '$project': {
        'title': 1, 
        'createdAt': 1, 
        'ofertaID': 1, 
        'url': 1, 
        'company': 1, 
        'city': 1, 
        'deadline_application': 1, 
        deadline_: {
          $dateToString: {
            format: "%d-%m-%Y",
            date: "$deadline_application"
          }
        },
        'fechaPublicacion': {
          '$dateToString': {
            'format': '%d-%m-%Y', 
            'date': '$createdAt'
          }
        }
      }
    }, {
      '$sort': {
        'createdAt': -1
      }
    }, {
      '$sample': {
        'size': 5
      }
    }
  ]);

  res.render("index",{ oferta: ultimasOfertas});
};

export const renderAbout = (req, res) => {
  res.render("about");
};

export const renderLegal = (req, res) => {
  res.render("legal");
};

export const renderSuscribirse = (req, res) => {
  res.redirect("auth/signup");
};
