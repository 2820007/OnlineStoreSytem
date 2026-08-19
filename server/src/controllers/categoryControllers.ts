
import Category from "../database/models/categoryModel";
import type { Response, Request } from "express";


class CategoryController {
  categoryData = [
    {
      categoryName: "Electronics",
    },

    {
      categoryName: "Groceries",
    },

    {
      categoryName: "Foods",
    },
  ];

  

  //add category

  async seedCategory(): Promise<void> {
    const datas = await Category.findAll();
    if (datas.length === 0) {
      await Category.bulkCreate(this.categoryData);
      console.log("Categories seeded successfully");
    } else {
      console.log("categories already seeded");
    }
  }

  async addCategory(req: Request, res: Response): Promise<void> {
    const { categoryName } = req.body;
    if (!categoryName) {
      res.status(400).json({
        message: "Please provide categoryName",
      });
      return;
    }
     await Category.create({
      categoryName,
    });
    res.status(200).json({
      message: "Category created successfully",
      
    });
  }

  //Fetch categories

  async getCategories(req: Request, res: Response): Promise<void> {
    const data = await Category.findAll();
    res.status(200).json({
      message: "Fetched categories",
      data,
    });
  }

  //delete category

  async deleteCategories(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({
        message: "Please provide id to delete",
      });
      return;
    }

    const data = await Category.findAll({
      where: {
        id: id,
      },
    });

    if (data.length === 0) {
      res.status(404).json({
        message: "No category with that id",
      });
    } else {
      await Category.destroy({
        where: {
          id,
        },
      });
    }

    res.status(200).json({
      message: "categories deleted successfully",
      data,
    });
  }

  //update

  async updateCategories(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { categoryName } = req.body;

    if (!id || !categoryName) {
      res.status(400).json({
        message: "Please provide id ,categoryName to update",
      });
      return;
    }

    const data = await Category.findAll({
      where: {
        id: id,
      },
    });

    if (data.length === 0) {
      res.status(404).json({
        message: "No category with that id",
      });
    } else {
      await Category.update(
        {
          categoryName: categoryName,
        },
        {
          where: {
            id,
          },
        },
      );
    }

    res.status(200).json({
      message: "categories updated successfully",
      data,
    });
  }
}

export default new CategoryController();
