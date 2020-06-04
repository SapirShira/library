using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
    public class categoriesConverter
    {
        public static CategoryDTO ConvertCategoryToDTO(Category category)
        {
            return new CategoryDTO
            {
               nameCategory=category.nameCategory
            };
        }

        public static Category ConvertCategoryDTOToDAL(CategoryDTO category)
        {
            return new Category
            {
                nameCategory = category.nameCategory
            };
        }

        public static List<CategoryDTO> ConvertCategoryListToDTO(List<Category> category)
        {
            return category.Select(a => ConvertCategoryToDTO(a)).ToList();
        }
    }
}
