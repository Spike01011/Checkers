using System;

public class Startup
{
	public Startup()
	{

    public IConfiguration Configuration { get; }
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }
}
}
