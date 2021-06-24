import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUserCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUserCase(categoriesRepository);
const listCategoriesControler = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesControler };
