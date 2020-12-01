```java
    public int[] sum(int[] nums, int target) {
        if(nums == null ||  nums.length === 0 || target == null) {
            System.out.println("参数无效");
            return;
        }
        int[] result = new int[2];
        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    result[0] = i + 1;
                    result[1] = j + 1;
                    break;
                }
            }
        }
        return result;
    }
    ///
    System.out.println(sum().toString());
```
