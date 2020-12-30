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