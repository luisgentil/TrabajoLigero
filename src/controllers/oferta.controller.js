import Oferta from "../models/Oferta.js";

// ###### RENDER LISTADO DE todas OFERTAS vigentes  
// listado de todas las ofertas VIGENTES
export const renderOferta = async (req, res) => {
  const today = new Date();
  const todasOfertas = await Oferta.aggregate(
    [
      {
        $match: {
          deadline_application: {
            $gt: new Date(today)
          }
        }
      },
      {
        $project: {
          title: 1,
          createdAt: 1,
          ofertaID: 1,
          url: 1,
          company: 1,
          city: 1,
          PR: 1,
          category: 1,
          deadline_application: 1,
          deadline_: {
            $dateToString: {
              format: "%d-%m-%Y",
              date: "$deadline_application"
            }
          },
          fechaPublicacion: {
            $dateToString: {
                      format: '%d-%m-%Y', 
                      date: '$createdAt'
                    }
          }
        }
      },
      { $sort: { deadline_application: 1 } },
      { $limit: 1000 }
    ],
    { maxTimeMS: 60000, allowDiskUse: true }
  );

  res.render("ofertas",{ oferta: todasOfertas});
};
// Genera el listado de las ofertas creadas en las últimas 2 h
export const renderNuevasOfertas = async (req, res) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setHours(today.getHours() -2); //sólo consideramos las ofertas de las 2 últimas horas
  const recuentoNuevasOfertas = await Oferta.aggregate(
    [
      {
        $match: {
          createdAt: {
            $gt: new Date(yesterday)
          }
        }
      },
      {
        $project: {
          title: 1,
          ofertaID: 1,
          url: 1,
          company: 1,
          city: 1,
          PR: 1,
          category: 1,
          deadline_application: 1,
          deadline_:  {
            $dateToString: {
              format: "%d-%m-%Y",
              date: "$deadline_application"
            }
          },
          fechaPublicacion: {
            $dateToString: {
              format: '%d-%m-%Y',
              date: '$createdAt'
            }
          }
        }
      },
      { $sort: { deadline_application: 1 } }
    ],
    { maxTimeMS: 60000, allowDiskUse: true }
  );
  
  res.render('ofertas', { oferta: recuentoNuevasOfertas});   ////// ac
};
// Genera el listado de las ofertas creadas en las últimas 24 h
export const renderOfertasRecientes = async (req, res) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setHours(today.getHours() -24); //sólo consideramos las ofertas de las 24 últimas horas
  const recuentoNuevasOfertas = await Oferta.aggregate(
    [
      {
        $match: {
          createdAt: {
            $gt: new Date(yesterday)
          }
        }
      },
      {
        $project: {
          title: 1,
          ofertaID: 1,
          url: 1,
          company: 1,
          city: 1,
          PR: 1,
          category: 1,
          deadline_application: 1,
          deadline_:  {
            $dateToString: {
              format: "%d-%m-%Y",
              date: "$deadline_application"
            }
          },
          fechaPublicacion: {
            $dateToString: {
              format: '%d-%m-%Y',
              date: '$createdAt'
            }
          }
        }
      },
      { $sort: { deadline_application: 1 } }
    ],
    { maxTimeMS: 60000, allowDiskUse: true }
  );
  
  res.render('ofertas', { oferta: recuentoNuevasOfertas});   ////// ac
};
// Genera el listado de las ofertas VIGENTES en Sevilla
export const renderOfertaSevilla = async (req, res) => {
  const today = new Date();
  const todasOfertasSevilla = await Oferta.aggregate(
    [
      {
        $match: {
          PR: {
            $in: ["41"]
          },
          deadline_application: {
            $gt: new Date(today)
          }
        }
      },
      {
        $project: {
          title: 1,
          createdAt: 1,
          ofertaID: 1,
          url: 1,
          company: 1,
          city: 1,
          deadline_application: 1,
          deadline_: {
            $dateToString: {
              format: "%d-%m-%Y",
              date: "$deadline_application"
            }
          },
          fechaPublicacion: {
            $dateToString: {
                      format: '%d-%m-%Y', 
                      date: '$createdAt'
                    }
          },
          category: 1,
        }
      },
      { $sort: { createdAt: -1 } },
      { $limit: 1000 }
    ],
    { maxTimeMS: 60000, allowDiskUse: true }
  );
  res.render("ofertasSE",{ oferta: todasOfertasSevilla});
};

export const renderOfertaAndalucia = async (req, res) => {
  const today = new Date();
  const todasOfertasAndalucia = await Oferta.aggregate(
    [
      {
        $match: {
          PR: {
            $in: ["04", "11", "14", "18", "21", "23", "41", "AN"]
          },
          deadline_application: {
            $gt: new Date(today)
          }
        }
      },
      {
        $project: {
          title: 1,
          createdAt: 1,
          ofertaID: 1,
          url: 1,
          company: 1,
          city: 1,
          deadline_application: 1,
          deadline_: {
            $dateToString: {
              format: "%d-%m-%Y",
              date: "$deadline_application"
            }
          },
          fechaPublicacion: {
            $dateToString: {
                      format: '%d-%m-%Y', 
                      date: '$createdAt'
                    }
          },
          category: 1,
          PR: 1
        }
      },
      { $sort: { createdAt: -1 } },
      { $limit: 1000 }
    ],
    { maxTimeMS: 60000, allowDiskUse: true }
  );
  res.render("ofertasAnd",{ oferta: todasOfertasAndalucia});
};

export const renderOfertaEspana = async (req, res) => {
  const today = new Date();
  const todasOfertasEspana = await Oferta.aggregate(
    [
      {
        $match: {
          PR: {
            $nin: ["04", "11", "14", "18", "21", "23", "41", "AN", "00"]
          },
          deadline_application: {
            $gt: new Date(today)
          }
        }
      },
      {
        $project: {
          title: 1,
          createdAt: 1,
          ofertaID: 1,
          url: 1,
          company: 1,
          city: 1,
          deadline_application: 1,
          deadline_: {
            $dateToString: {
              format: "%d-%m-%Y",
              date: "$deadline_application"
            }
          },
          fechaPublicacion: {
            $dateToString: {
                      format: '%d-%m-%Y', 
                      date: '$createdAt'
                    }
          },
          category: 1,
          PR: 1
        }
      },
      { $sort: { createdAt: -1 } },
      { $limit: 1000 }
    ],
    { maxTimeMS: 60000, allowDiskUse: true }
  );
  res.render("ofertasEsp",{ oferta: todasOfertasEspana});
};

export const renderOfertaMundo = async (req, res) => {
  const today = new Date();
  const todasOfertasMundo = await Oferta.aggregate(
    [
      {
        $match: {
          PR: {
            $in: ["00"]
          },
          deadline_application: {
            $gt: new Date(today)
          }
        }
      },
      {
        $project: {
          title: 1,
          createdAt: 1,
          ofertaID: 1,
          url: 1,
          company: 1,
          city: 1,
          deadline_application: 1,
          deadline_: {
            $dateToString: {
              format: "%d-%m-%Y",
              date: "$deadline_application"
            }
          },
          fechaPublicacion: {
            $dateToString: {
                      format: '%d-%m-%Y', 
                      date: '$createdAt'
                    }
          },
          category: 1,
          PR: 1
        }
      },
      { $sort: { createdAt: -1 } },
      { $limit: 1000 }
    ],
    { maxTimeMS: 60000, allowDiskUse: true }
  );
  res.render("ofertasMundo",{ oferta: todasOfertasMundo });
};

export const renderFormBusqueda = (req, res) => res.render('filter.hbs');

export const renderEncontrar = async (req, res) => {
  const provinciaSelecionada = req.body.inputPR;
  console.log('inputPR', req.body.inputPR);
  const today = new Date();
  const ofertasEncontradas = await Oferta.aggregate(
    [
      {
        $match: {
          PR: {
            $in: [provinciaSelecionada]
          },
          deadline_application: {
            $gt: new Date(today)
          }
        }
      },
      {
        $project: {
          title: 1,
          createdAt: 1,
          ofertaID: 1,
          url: 1,
          company: 1,
          city: 1,
          deadline_application: 1,
          deadline_: {
            $dateToString: {
              format: "%d-%m-%Y",
              date: "$deadline_application"
            }
          },
          fechaPublicacion: {
            $dateToString: {
                      format: '%d-%m-%Y', 
                      date: '$createdAt'
                    }
          },
          category: 1,
          PR: 1,
        }
      },
      { $sort: { createdAt: -1 } },
      { $limit: 1000 }
    ],
    { maxTimeMS: 60000, allowDiskUse: true }
  );
  res.render("ofertasFiltradas" ,{ oferta: ofertasEncontradas });
};

/* export const renderTest = async (req, res) => {
  const receivedData = req.body.inputText;
  console.log('Datos recibidos:', receivedData);
  res.status(201).send('Datos recibidos correctamente');
}; */
// //#######################################################################
// // ####### Función Común para grabar cualquier lista de ofertas #########
// // ### devuelta por cualquier función que revise una web con ofertas ####
// //#######################################################################

// const grabarUnaListaDeOfertas = async (listaOfertas) => {
//   const intento = (listaOfertas.map(async (cadaOferta) => {
//     try {
//       const { title, description, ofertaID, company, url } = cadaOferta;
//       const newOferta = new Oferta({ title, description, ofertaID, company, url });
//       await newOferta.save();
//       return 1;
//     }
//     catch (err) {
//       console.log('err');
//       return err;
//     }
//   }))
// };
// //#######################################################################
// // ### Función básica que quizás haya que eliminar
export const createNewOferta = async (req, res) => {
  const { title, description, ofertaID, company, url } = req.body;
  const newOferta = new Oferta({ title, description, ofertaID, company, url, deadline_application });
  await newOferta.save();
  res.redirect("/ofertas");

  /* 
  const errors = [];
  if (!title) {
    errors.push({ text: "Please Write a Title." });
    }
    if (!description) {
      errors.push({ text: "Please Write a Description" });
      }
    if (errors.length > 0)
    return res.render("notes/new-note", {
        errors,
        title,
        description,
        });
        
        req.flash("success_msg", "Note Added Successfully");
        newNote.user = req.user.id;
        */
};


//////////////// ANTIGUO, LO MANTENGO EN DEV POR SI HACEN FALTA EJEMPLOS. BORRAR FINAL
/* 
export const renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id })
    .sort({ date: "desc" })
    .lean();
  res.render("notes/all-notes", { notes });
};

export const renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  if (note.user != req.user.id) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/notes");
  }
  res.render("notes/edit-note", { note });
};

export const updateNote = async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Note Updated Successfully");
  res.redirect("/notes");
};

export const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Note Deleted Successfully");
  res.redirect("/notes");
};
 */