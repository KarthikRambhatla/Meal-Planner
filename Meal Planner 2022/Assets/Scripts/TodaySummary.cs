using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class TodaySummary : MonoBehaviour
{
    public int resHeight = 1440;
    public int resWidth = 2160;

    public GameObject saveButton;

    public void SaveScreenshot()
    {
        ScreenshotHandler.TakeScreenshot_Static(resHeight, resWidth);
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
