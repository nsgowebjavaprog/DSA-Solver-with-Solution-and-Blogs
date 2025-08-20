const questions = [
  { title: "Two Sum", url: "https://leetcode.com/problems/two-sum/" },
  { title: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
  { title: "Maximum Subarray", url: "https://leetcode.com/problems/maximum-subarray/" },
  { title: "Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/" },
  { title: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/" },
  { title: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
  { title: "3Sum", url: "https://leetcode.com/problems/3sum/" },
  { title: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/" },
  { title: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/" },
  { title: "Binary Tree Inorder Traversal", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
  { title: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
  { title: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/" },
  { title: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
  { title: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/" },
  { title: "Balanced Binary Tree", url: "https://leetcode.com/problems/balanced-binary-tree/" },
  { title: "Same Tree", url: "https://leetcode.com/problems/same-tree/" },
  { title: "Symmetric Tree", url: "https://leetcode.com/problems/symmetric-tree/" },
  { title: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
  { title: "Lowest Common Ancestor of a BST", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
  { title: "Subtree of Another Tree", url: "https://leetcode.com/problems/subtree-of-another-tree/" },
  { title: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
  { title: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
  { title: "Binary Tree Zigzag Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
  { title: "Path Sum", url: "https://leetcode.com/problems/path-sum/" },
  { title: "Word Search", url: "https://leetcode.com/problems/word-search/" },
  { title: "Trapping Rain Water", url: "https://leetcode.com/problems/trapping-rain-water/" },
  { title: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self/" },
  { title: "Maximum Product Subarray", url: "https://leetcode.com/problems/maximum-product-subarray/" },
  { title: "Find Minimum in Rotated Sorted Array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
  { title: "Search a 2D Matrix", url: "https://leetcode.com/problems/search-a-2d-matrix/" },
  { title: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
  { title: "Longest Repeating Character Replacement", url: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
  { title: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/" },
  { title: "Valid Anagram", url: "https://leetcode.com/problems/valid-anagram/" },
  { title: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/" },
  { title: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/" },
  { title: "Longest Palindromic Substring", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
  { title: "Palindrome Partitioning", url: "https://leetcode.com/problems/palindrome-partitioning/" },
  { title: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
  { title: "Add Two Numbers", url: "https://leetcode.com/problems/add-two-numbers/" },
  { title: "Copy List with Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
  { title: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/" },
  { title: "Reorder List", url: "https://leetcode.com/problems/reorder-list/" },
  { title: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/" },
  { title: "Implement Trie (Prefix Tree)", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
  { title: "Design Add and Search Words Data Structure", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
  { title: "Word Break", url: "https://leetcode.com/problems/word-break/" },
  { title: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
  { title: "Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
  { title: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
];

export default function DSA() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Top 50 LeetCode DSA Questions</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {questions.map((q, i) => (
          <li key={i} className="p-3 bg-gray-100 rounded shadow hover:bg-blue-100">
            <a href={q.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">
              {i + 1}. {q.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
