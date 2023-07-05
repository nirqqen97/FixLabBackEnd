import Form from "./Form.js";

class FormController {
  async create(req, res) {
    try {
      const { body } = req;
      const formCreate = await Form.create(body);

      res.status(200).json(formCreate);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAll(req, res) {
    try {
      const AllForm = await Form.find();
      res.status(200).json(AllForm);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //   async getOne(req, res) {
  //     try {
  //       const Fidnedpost = await PostService.getOne(req.params.streamerId);
  //       res.status(200).json(Fidnedpost);
  //     } catch (error) {
  //       res.status(500).json(error + "error");
  //     }
  //   }

  //   async vote(req, res) {
  //     try {
  //       const updatedUser = await PostService.vote(req.params);
  //       res.status(200).json(updatedUser);
  //     } catch (error) {
  //       res.status(500).json(error);
  //     }
  //   }
}

export default new FormController();
