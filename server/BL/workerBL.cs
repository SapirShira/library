using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class workerBL
    {
        public static bool addWorker(WorkerDTO s)
        {
            using (libraryEntities db = new libraryEntities())
            {

                if (db.Workers.First(x => x.idWorker == s.idWorker) != null)
                {
                    s.status = true;
                    updateWorker(s);
                }
                else
                    db.Workers.Add(Converters.WorkerConverter.ConvertWorkerDTOToDAL(s));
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


        public static bool updateWorker(WorkerDTO a)
        {
            using (libraryEntities db = new libraryEntities())
            {
                Worker au = db.Workers.First(x => x.idWorker == a.idWorker);
                au.name = a.name;
                au.status = a.status;
                au.address = a.address;
                au.phone = a.phone;
                au.password = a.password;
                au.typeWork = a.typeWork;


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


        public static bool deleteWorker(int a)
        {
            using (libraryEntities db = new libraryEntities())
            {
                Worker au = db.Workers.First(x => x.idWorker == a);

                au.status = false;

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



        public static List<WorkerDTO> GetWorkerById(int code)
        {
            using (libraryEntities db = new libraryEntities())
            {
                List<WorkerDTO> t = Converters.WorkerConverter.ConvertWorkerListToDTO(db.Workers.Where(x => x.idWorker == code).ToList());
                return t;
            }
        }


        public static List<WorkerDTO> GetWorkers()
        {
            using (libraryEntities db = new libraryEntities())
            {
                return Converters.WorkerConverter.ConvertWorkerListToDTO(db.Workers.Where(a => a.status == true).ToList());

            }
        }


    }
}
