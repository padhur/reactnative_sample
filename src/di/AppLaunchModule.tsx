import AppModule from "./AppModule";

class AppLaunchModule {

  public initialise(): void {
     /// Register app level dependencies
    AppModule.initialise();
  }

}

export default new AppLaunchModule();
