using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
    public class WorkerConverter
    {
        public static WorkerDTO ConvertWorkerToDTO(Worker worker)
        {
            return new WorkerDTO
            {
                name=worker.name,
                address=worker.address,
                idWorker=worker.idWorker,
                password=worker.password,
                phone=worker.phone,
                typeWork=worker.typeWork,
                status=worker.status
            };
        }

        public static Worker ConvertWorkerDTOToDAL(WorkerDTO worker)
        {
            return new Worker
            {
                name = worker.name,
                address = worker.address,
                idWorker = worker.idWorker,
                password = worker.password,
                phone = worker.phone,
                typeWork = worker.typeWork,
                status = worker.status
            };
        }

        public static List<WorkerDTO> ConvertWorkerListToDTO(List<Worker> worker)
        {
            return worker.Select(a => ConvertWorkerToDTO(a)).ToList();
        }
    }
}
