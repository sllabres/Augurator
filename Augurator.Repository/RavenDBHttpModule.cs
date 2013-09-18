using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using StructureMap;
using Raven.Client;

namespace Augurator.Repository
{
    public class RavenDBHttpModule : IHttpModule
    {
        IDocumentSession _session;

        public void Init(HttpApplication context)
        {
            context.BeginRequest += ContextBeginRequest;
            context.EndRequest += ContextEndRequest;
        }

        private void ContextBeginRequest(object sender, EventArgs e)
        {
            _session = ObjectFactory.GetInstance<IDocumentSession>();
        }

        private void ContextEndRequest(object sender, EventArgs e)
        {
            Dispose();
        }

        public void Dispose()
        {
            if (_session != null)
            {
                _session.SaveChanges();
                _session.Dispose();
                _session = null;
            }
        }
    }
}
