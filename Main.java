import java.util.*;

class Main {
    static int maxSubarraySum(int arr[], int n){

        int[] dp = new int[n];
        dp[0] = Math.max(arr[0], 0);
        int max = dp[0];
        int i;
        for (i = 1 ; i < n ; i++) {
            dp[i] = Math.max(dp[i-1]+arr[i], 0);
            max = Math.max(max, dp[i]);
        }
        return max;
    }
    static int getMinDiff(int[] arr, int n, int k) {
        if (n==1) return 0;
        Arrays.sort(arr);
        int ans = arr[n-1] - arr[0];
        for (int i = 1 ; i < n ; i++) {
            if (arr[i] >= k) {
                int min = Math.min(arr[0]+k, arr[i] - k);
                int max = Math.max(arr[n-1]-k, arr[i-1]+k);
                ans = Math.min(ans, max-min);
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] arr = {2, 6, 3, 4, 7, 2, 10, 3, 2, 1};
        int a = getMinDiff(arr, arr.length, 5);
        System.out.println(a);
    }
}
