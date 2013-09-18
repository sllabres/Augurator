using Raven.Client;
using Raven.Client.Document;
using StructureMap.Configuration.DSL;

namespace Augurator.Repository
{
    public class RavenDbRegistry : Registry
    {
        public RavenDbRegistry(string connectionStringName)
        {
            For<IDocumentStore>()
                .Singleton()
                .Use(() =>
                {
                    var documentStore = new DocumentStore { ConnectionStringName = connectionStringName };
                    documentStore.Initialize();
                    return documentStore;
                }
                )
                .Named("RavenDB Document Store.");

            For<IDocumentSession>()                
                .HttpContextScoped()
                
                .Use(x =>
                {
                    var documentStore = x.GetInstance<IDocumentStore>();
                    return documentStore.OpenSession();
                })
                .Named("RavenDb Session -> per Http Request.");
        }
    }
}