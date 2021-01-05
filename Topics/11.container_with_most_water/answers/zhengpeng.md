###第一版
```java
class Solution {
    public int maxArea(int[] height) {
        int max = 0;
        for(int i = 0;i<height.length - 1;i++) {
            int singleHeight = height[i];
            for(int j = i + 1;j<height.length;j++) {
                int width = j - i;
                int resHeight = height[j] > singleHeight ? singleHeight : height[j];
                int capacity = width * resHeight;
                max = capacity > max ? capacity : max;
            }
        }
        return max;
    }
}
```
###第二版
```java
public class Solution {
    public int maxArea(int[] height) {
        int l = 0, r = height.length - 1;
        int ans = 0;
        while (l < r) {
            int area = Math.min(height[l], height[r]) * (r - l);
            ans = Math.max(ans, area);
            if (height[l] <= height[r]) {
                ++l;
            }
            else {
                --r;
            }
        }
        return ans;
    }
}
```