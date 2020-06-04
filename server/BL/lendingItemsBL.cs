﻿using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class lendingItemsBL
    {
        public static bool addLendingItems(LendingItemDTO l)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.LendingItems.Add(Converters.LendingItemConverter.ConvertLendingItemDTOToDAL(l));
                db.Otakims.First(a => a.codeOtek == l.codeOtek).status = "מושאל";
                try
                {
                    db.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }

            }
        }
    }
}
