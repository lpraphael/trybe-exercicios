function validateName(req, res, next) {
  const { name } = req.body;

  if (!name || name === '') return res.status(400).json({ "message": "O campo productName é obrigatório" });

  if (!name || name.length < 4) return res.status(400).json({ "message": "O campo productName deve ter pelo menos 4 caracteres" });

  next();
};

function validateInfos(req, res, next) {
  const { infos } = req.body;

  if(!Object.keys(infos).includes([saleDate, warrantyPeriod])) {
    return res.status(400).json({})
  }
}