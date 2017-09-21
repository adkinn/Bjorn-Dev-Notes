# Bugs

And notes about bugs . . . there is an article about [what bugs mean in the context of this team](https://review.docs.microsoft.com/en-us/new-hope/engineering/bugs?branch=master) written by Sampy.

## After a bug is assigned to you

1. Likely, you'll just need to investigate it first.
2. Then, if you've decided you can fix it, then you'll change it to a User story. In Visual Studeo team services, under the bug, then click the three dots in the upper right hand corner, then click "Change Type ...". Choose **User Story** and fill in a reason if you choose to do so. You'll eventually be prompted to change the **State** of the work item to something other than active (which is only for bugs). Change it to in progress or something like that.
3. Now the bug is just a normal user story and should be seen in the [stories board here](https://mseng.visualstudio.com/CSI/Duncan/_backlogs/board/Stories).

## Notes about specific bugs below

-----

### The 3 Column Discreet bug

problems: 
- the discrete class (with long text) wraps to two columns.

file locations:
- `_cols.scss`, particularly $desktop media query
