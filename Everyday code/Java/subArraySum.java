//Program to find maximum sum of subArray where subArray length is given as k.
import java.io.*;
import java.util.*;

class Main {
    public static int subArraySum(int arr[], int k)
    {
		int n =arr.length;
		System.out.println(Arrays.toString(arr));
		 if (n < k)
		{
			System.out.println("Invalid");
			return -1;
		}   
		int res = 0;
        for (int i=0; i<k; i++)
           res += arr[i];
 
        int curr_sum = res;
        for (int i=k; i<n; i++)
        {
           curr_sum += arr[i] - arr[i-k];
           res = Math.max(res, curr_sum);
        }
        return res;
    }
    // Driver code
    public static void main (String[] args)
    {
        int arr[] = {1, 4, 2, 10, 2, 3, 1, 0, 20};
		int k = 4;
		int maxSum = subArraySum(arr, k);
		System.out.println(maxSum);
    }
}