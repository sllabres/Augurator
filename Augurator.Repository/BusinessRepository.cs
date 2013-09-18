using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Raven.Client;
using Augurator.Repository.Entities;

namespace Augurator.Repository
{
    public abstract class Repository<T>
    {
        protected readonly IDocumentSession Session;

        public Repository(IDocumentSession session)
        {
            Session = session;
        }
    }

    public class BusinessRepository : Repository<Business>
    {
        public BusinessRepository(IDocumentSession session)
            : base(session)
        {
        }

        public void Store(Business business)
        {
            Session.Store(business);            
        }
    }
}
