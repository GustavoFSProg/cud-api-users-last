import md5 from 'md5'
import usersModel from '../models/usersModel'

async function getAll(req, res) {
  try {
    const data = await usersModel.find()

    return res.status(201).send(data)
  } catch (error) {
    return res.status(400).send({ message: 'ERROR, tudo cagado!!', error })
  }
}

async function create(req, res) {
  try {
    const data = await usersModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.DATABASE_KEY),
      imagem: req.file.imagem,
    })

    return res.status(201).send({ Message: 'DEU certo!', data })
  } catch (error) {
    console.log(error)

    return res.status(400).send({ Message: 'ERRO, tudo cagado!', error })
  }
}

export default { getAll, create }
