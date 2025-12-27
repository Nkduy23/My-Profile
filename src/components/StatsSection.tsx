export const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      <div className="bg-white p-4 rounded shadow">
        <h3>GitHub Stats</h3>
        {/* Placeholder: Bạn có thể integrate GitHub API sau */}
        <p>
          Contributions: (Add graph here using{" "}
          <img src="https://github-readme-stats.vercel.app/api?username=Nkduy23" />)
        </p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3>LeetCode</h3>
        <p>Solved: Easy 40, Medium 10, Hard 5 (Từ CV certification, chỉnh nếu cần)</p>
      </div>
    </div>
  );
};
