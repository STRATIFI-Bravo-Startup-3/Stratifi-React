import ButtonSm from "../common/ButtonSm";

const Subscriptions = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center px-2 gap-4 text-sm md:text-base">
      <h1 className="text-2xl font-bold">Billing & Subscriptions</h1>
      <div className="flex flex-col gap-3">
        <span>Active Subscription: Premium Plan</span>
        <span>Expires: May 2024</span>
        <ButtonSm label="Change Plan" />
      </div>
    </div>
  );
};

export default Subscriptions;
