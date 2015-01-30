using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CheersCaitlin.Startup))]
namespace CheersCaitlin
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
