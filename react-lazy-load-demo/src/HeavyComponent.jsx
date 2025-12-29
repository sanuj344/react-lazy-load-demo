function HeavyComponent() {
  return (
    <div className="heavy">
      <h2>Heavy Component Loaded 🚀</h2>
      <p>
        This component was loaded lazily only when required.
      </p>
    </div>
  );
}

export default HeavyComponent;
